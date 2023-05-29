const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  hash_password: {
    type: String,
    minlength: 6,
    required: true,
  },
});

UserSchema.methods.comparePassword = (password) => {
  return bcrypt.compare(password, this.hash_password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;