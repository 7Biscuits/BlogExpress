const Joi = require("joi");
const Post = require("../models/PostModel");
const User = require("../models/User");

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  username: Joi.string().min(3).required(),
});

const fetchPosts = async (req, res) => {
  try {
    await Post.find().then((post) => res.json(post));
  } catch (err) {
    res.send(err.message);
  }
};

const fetchPostsByUsername = async (req, res) => {
  try {
    await Post.findMany({ username: req.params.username }).then((post) => res.json(post));
  } catch (err) {
    res.send(err.message);
  }
};

const fetchPostById = async (req, res) => {
  try {
    await Post.findById(req.params.postid).then((post) => res.json(post));
  } catch (err) {
    res.send(err.message);
  }
};

const createPost = async (req, res) => {
  const { error } = await postSchema.validateAsync(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { title, content, userid } = req.body;
  const post = new Post({
    title: title,
    content: content,
    userid: userid,
  });

  try {
    await post.save().then(async () => {
      await User.findByIdAndUpdate(userid, { posts: ++posts }, {
        returnOriginal: false,
      });
      res.send("Blog posted successfully");
    });
  } catch (err) {
    res.send(err.message);
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.deleteOne(req.params.postid).then(() =>
      res.send("Blog deleted successfully")
    );
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  fetchPosts,
  fetchPostsByUsername,
  fetchPostById,
  createPost,
  deletePost,
};