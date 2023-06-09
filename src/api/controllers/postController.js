const Joi = require("joi");
const Post = require("../models/PostModel");

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

const fetchPost = async (req, res) => {
  try {
    await Post.findOne({ post: req.params._id }).then((post) => res.json(post));
  } catch (err) {
    res.send(err.message);
  }
};

const createPost = async (req, res) => {
  const { title, content, username } = req.body;
  const blog = new Post({
    title: title,
    content: content,
    username: username,
  });

  try {
    const { error } = await postSchema.validateAsync(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    await blog.save().then(() => res.send("Blog posted successfully"));
  } catch (err) {
    res.send(err.message);
  }
};

const deletePost = async (req, res) => {
  const { username } = req.body;

  try {
    await Post.deleteOne({ post: req.params.id, username: username }).then(() =>
      res.send("Blog deleted successfully")
    );
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  fetchPosts,
  fetchPost,
  createPost,
  deletePost,
};
