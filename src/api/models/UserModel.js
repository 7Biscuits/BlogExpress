const mongoose = require("mongoose");

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
  date: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("User", UserSchema);