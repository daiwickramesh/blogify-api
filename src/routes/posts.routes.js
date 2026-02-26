const express = require('express');
const router = express.Router();

// Import controller
const postController = require('../Controllers/post.controllers');

// Routes
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);

module.exports = router;