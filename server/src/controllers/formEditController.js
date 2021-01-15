const Post = require("../models/Posts.js");

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, image, category } = req.body;

  if (!isNaN(Number(id)) && title && content) {
    try {
      const post = await Post.findOne({ where: { id } });
      if (post) {
        const rowsUpdated = await Post.update(
          {
            title: title,
            content: content,
            image: image,
            category: category,
          },
          {
            where: { id },
          }
        );
        res.json({ rows: rowsUpdated });
      } else {
        res.json({ status: 404, message: "Post not found" });
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  } else {
    res.json({
      status: 404,
      message:
        "ID is required for update a post or title and content not especifies",
    });
  }
};

module.exports = updatePost;
