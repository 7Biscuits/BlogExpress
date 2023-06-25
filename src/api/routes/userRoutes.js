const express = require("express");
const {
  fetchUsers,
  fetchUserByUsername,
  fetchUserById,
  deleteUsers,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(fetchUsers);
router.route("/id/:userid").get(fetchUserById);
router.route("/username/:username").get(fetchUserByUsername);
router.route("/").delete(deleteUsers);
router.route("/:userid").delete(deleteUser);

module.exports = router;