const express = require('express');
const router = express.Router();
const { getAllPosts, updatePost } = require('../controllers/homeControllers.js');
const { createPost } = require('../controllers/formCreateController.js');

router.get('/posts/:start/:end', getAllPosts);
router.post('/posts', createPost);
router.patch('/posts/:id', updatePost);

module.exports = router;