const Post = require("../models/Posts.js");

const createPost = async (req, res) => {
    const { title, content, image, category } = req.body;
  
    if (title && content) {
      try {
        await Post.create({
          title,
          content,
          image,
          category,
        });
        res.json({ status: 201, message: "Post created" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.json({ status: 409, message: "Title and content are required." });
    }
};

module.exports = createPost;