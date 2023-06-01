const express = require("express");
const {
  signup,
  signin,
} = require("../controllers/userController");

const router = express.Router();

router.route('/auth/signup').post(signup);
router.route('/auth/signin').post(signin);

module.exports = router;