const Post = require('../models/Posts.js');

const getAllPosts = async (req, res) => {

    const {start, end} = req.params;

    try {
        const posts = await Post.findAll({
            offset: parseInt(start),
            limit: parseInt(end)
        });
        res.json({status: 200, data: posts});
    } catch (error) {
        console.error(error);
    };
};

module.exports = {
    getAllPosts
};