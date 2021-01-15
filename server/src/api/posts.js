const express = require('express');
const router = express.Router();
const { getAllPosts } = require('../controllers/homeControllers.js');
const { createPost } = require('../controllers/formCreateController.js');
const updatePost = require('../controllers/formEditController.js');

router.get('/posts/:start/:end', getAllPosts);
router.post('/posts', createPost);
router.patch('/posts/:id', updatePost);

module.exports = router;