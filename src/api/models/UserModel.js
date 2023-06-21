const mongoose = require("mongoose");

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const date = new Date();

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    minlength: 3,
    maxlength: 36,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 128,
    required: true,
  },
  posts: {
    type: Number,
    default: 0,
  },
  followers: {
    type: Array,
    default: []
  },
  following: {
    type: Array,
    default: []
  },
  date: {
    type: String,
    default: `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`,
  },
});

module.exports = mongoose.model("User", UserSchema);