const express = require('express');
const router = express.Router();

// Import controller
const postController = require('../controllers/posts.controller');

// Route
router.get('/', postController.getAllPosts);

module.exports = router;