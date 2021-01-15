const Sequelize = require('sequelize');
const db = require('../config/db.js');

const Post = db.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    }
});

module.exports = Post;