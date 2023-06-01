const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const Joi = require("joi");

const signupSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
});

const signup = async (req, res) => {
  const { username, password } = req.body;

  if (await User.findOne({ username: username }))
    return res.status(400).json({ message: "Username already exists" });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    username: username,
    password: hashedPassword,
  });

  try {
    const { error } = await signupSchema.validateAsync(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });
    await user.save();
    res.json({ message: "Signup successful" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const signin = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  if (!user) return res.status(400).json({ message: "User not found" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Incorrect Password" });
  try {
    const { error } = await loginSchema.validateAsync(req.body);
    if (error) return res.json({ message: `schema error: ${error.details[0].message}` });
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).json({ message: "Login successful", token: token });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = {
  signup,
  signin,
};