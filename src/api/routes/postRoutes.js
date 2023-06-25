const router = require("express").Router;
const {
    fetchPosts,
    fetchPostsByUsername,
    fetchPost,
    createPost,
    deletePost,
} = require("../controllers/postController");


router.route("/").get(fetchPosts);
router.route("username/:username").get(fetchPostsByUsername);
router.route("id/:postid").get(fetchPost);
router.route("/create").post(createPost);
router.route("/delete/:postid").delete(deletePost);

module.exports = router;