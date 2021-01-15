const express = require('express');
const router = express.Router();
const { getAllPosts, deletePost } = require('../controllers/homeControllers.js');
const { createPost } = require('../controllers/formCreateController.js');
const updatePost = require('../controllers/formEditController.js');

router.get('/posts/:start/:end', getAllPosts);
router.post('/posts', createPost);
router.patch('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = router;