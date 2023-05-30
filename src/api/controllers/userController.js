const jwt = require("jwt");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");

const signup = (req, res) => {
  const { username, password } = req.body;

  const user = new User(username, password);

  user.hash_password = bcrypt.hashSync(password, 10);
  user.save((err, user) => {
    if (err) return res.status({ message: err.message });
    user.hash_password = undefined;
    return res.json(user);
  });
};

const signin = (req, res) => {
  const { username, password } = req.body;
  User.findOne(
    {
      username: username,
    },
    (err, user) => {
      if (err) throw err;
      if (!user || !user.comparePassword(password))
        return res
          .status(res.statusCode)
          .json({
            message: "Authentication failed. Invalid username or password",
          });
      return res.json({
        token: jwt.sign(
          { email: user.email, fullName: user.fullName, _id: user._id },
          "RESTFULAPIs"
        ),
      });
    }
  );
};

module.exports = {
  signup,
  signin,
};
