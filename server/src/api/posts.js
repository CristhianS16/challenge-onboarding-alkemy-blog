const express = require('express');
const router = express.Router();
const { getAllPosts } = require('../controllers/homeControllers.js');
const { createPost } = require('../controllers/formCreateController.js');

router.get('/posts/:start/:end', getAllPosts);
router.post('/posts', createPost);

module.exports = router;