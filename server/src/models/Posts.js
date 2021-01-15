const Sequelize = require('sequelize');
const db = require('../config/db.js');
const moment = require('moment');

const Post = db.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING,
        validate: {
            is: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g
        }
    },
    category: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE,
        get: function () {
            return moment(this.getDataValue('date')).format('YYYY-MM-DD');
        }
    }
});

module.exports = Post;