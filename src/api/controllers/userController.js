const User = require("../models/UserModel");

const fetchUsers = async (req, res) => {
  try {
    await User.find().then((user) => res.json(user));
  } catch (err) {
    res.json({ message: err.message });
  }
};

const fetchUser = async (req, res) => {
  try {
    await User.findById({ _id: req.params.id }).then((user) =>
      res.json({ user: user })
    );
  } catch (err) {
    res.json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id }).then(() =>
      res.json({ message: "User successfully deleted" })
    );
  } catch (err) {
    res.json({ message: err.message });
  }
};

const deleteUsers = async (req, res) => {
  try {
    await User.deleteMany({}).then(() =>
      res.json({ message: "User successfully deleted " })
    );
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = {
  fetchUsers,
  fetchUser,
  deleteUser,
  deleteUsers,
};