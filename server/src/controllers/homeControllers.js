const Post = require("../models/Posts.js");

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
    if(post){
      res.json(post);
    } else {
      res.status(404).json({message: 'Post not found'});
    };
  } catch (error) {
    res.status(500);
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
  getAllPosts,
  deletePost,
  getPost
};
