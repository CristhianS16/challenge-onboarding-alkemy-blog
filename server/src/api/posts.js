const express = require("express");
const router = express.Router();
const getAllPosts = require("../controllers/getAllPosts.js");
const getPost = require("../controllers/getPost.js");
const createPost = require("../controllers/createPost.js");
const updatePost = require("../controllers/updatePost.js");
const deletePost = require("../controllers/deletePost.js");

router.get("/posts/", getAllPosts);
router.get("/posts/:id", getPost);
router.post("/posts/", createPost);
router.patch("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

module.exports = router;
