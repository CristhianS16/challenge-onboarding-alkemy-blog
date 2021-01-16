const Post = require("../models/Posts.js");

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

module.exports = getPost;