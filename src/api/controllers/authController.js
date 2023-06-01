const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const User = require("../models/UserModel");

const signupSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
});

const signinSchema = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
});

const signup = async (req, res) => {
  const { username, password } = req.body;

  if (await User.findOne({ username: username }))
    return res.status(400).send("Username already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    username: username,
    password: hashedPassword,
  });

  try {
    const { error } = await signupSchema.validateAsync(req.body);
    if (error)
      return res.status(400).send(error.details[0].message);
    await user.save();
    res.send("Sign up successfull");
  } catch (err) {
    res.send(err.message);
  }
};

const signin = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  if (!user) return res.status(400).send("User not found");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.send("Incorrect Password");
  try {
    const { error } = await signinSchema.validateAsync(req.body);
    if (error) return res.send(error.details[0].message);
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send("Sign in successful");
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  signup,
  signin,
};