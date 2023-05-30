const express = require("express");
const {
  signup,
  signin,
  signinRequired,
  profile,
} = require("../controllers/userController");

const router = express.Router();

router.route('/auth/signup').post(signup);
router.route('/auth/signin').post(signin);
router.route('/tasks').post(signinRequired, profile);

module.exports = router;