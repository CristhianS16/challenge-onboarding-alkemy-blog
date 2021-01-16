const Post = require("../models/Posts.js");

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

module.exports = deletePost;