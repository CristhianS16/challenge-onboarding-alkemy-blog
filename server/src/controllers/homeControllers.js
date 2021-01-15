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

const deletePost = async (req, res) => {
    const { id } = req.params;
    if(isNaN(Number(id))){
        res.status(404).json({message: 'No id specified'});
    };
    try {
        const record = await Post.destroy({
            where: { id }
        });
        if(record === 1){
            res.status(200).json({message: 'Post deleted'});
        } else {
            res.status(404).json({message: 'Post not found'});
        };
    } catch (error) {
        res.status(500).json(error);
    };
};

module.exports = {
    getAllPosts,
    deletePost
};