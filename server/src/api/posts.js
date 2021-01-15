const express = require("express");
const router = express.Router();
const {
  getPostsPaginate,
  getAllPosts,
  getPost,
  deletePost,
} = require("../controllers/homeControllers.js");
const { createPost } = require("../controllers/formCreateController.js");
const updatePost = require("../controllers/formEditController.js");

router.get("/posts/:start/:end", getPostsPaginate);
router.get('/posts/', getAllPosts);
router.get('/posts/:id', getPost);
router.post("/posts", createPost);
router.patch("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

module.exports = router;
