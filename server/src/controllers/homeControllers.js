const Post = require('../models/Posts.js');

const getAllPosts = async (req, res) => {

    const {start, end} = req.params;

    try {
        const posts = await Post.findAll({
            attributes: {
                exclude: ['content']
            },
            offset: parseInt(start),
            limit: parseInt(end),
            order: [['date', 'DESC']]
        });
        res.json(posts);
    } catch (error) {
        console.log('Error: ', error);
    };
};

module.exports = {
    getAllPosts
};