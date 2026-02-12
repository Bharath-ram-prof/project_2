// const express = require("express");

// const router = express.Router();

// // GET /api/v1/posts
// router.get("/", (req, res) => {
//   res.json({
//     message: "All posts fetched successfully",
//   });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts.controllers');

// Example route (if you have one)
router.get('/', (req, res) => {
  res.json({ message: 'Get all posts' });
});

router.get('/:postId', postController.getPostById);

module.exports = router;

