const Post = require("../models/Posts.js");

const getPostsPaginate = async (req, res) => {
  const { start, end } = req.params;

  try {
    const posts = await Post.findAll({
      attributes: {
        exclude: ["content"],
      },
      offset: parseInt(start),
      limit: parseInt(end),
      order: [["date", "DESC"]],
    });
    res.json(posts);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [['date', 'DESC']]
    });
    res.json(posts);
  } catch (error) {
    res.status(404).json(error);
  };
};

const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findOne({ where: { id } });
    res.json(post);
  } catch (error) {
    res.status(404).json({message: 'Post not found'});
  };
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  if (isNaN(Number(id))) {
    res.status(404).json({ message: "No id specified" });
  }
  try {
    const record = await Post.destroy({
      where: { id },
    });
    if (record === 1) {
      res.status(200).json({ message: "Post deleted" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getPostsPaginate,
  getAllPosts,
  deletePost,
  getPost
};
