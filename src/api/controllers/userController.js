const mongoose = require("mongoose");
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

module.exports = {
    signup
}