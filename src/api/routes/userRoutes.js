const express = require("express");
const {
  fetchUsers,
  fetchUser,
  deleteUsers,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(fetchUsers);
router.route("/:userid").get(fetchUser);
router.route("/").delete(deleteUsers);
router.route("/:userid").delete(deleteUser);

module.exports = router;
