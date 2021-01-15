const express = require('express');
const router = express.Router();
const {getAllPosts} = require('../controllers/homeControllers.js');

router.get('/posts/:start/:end', getAllPosts);
module.exports = router;