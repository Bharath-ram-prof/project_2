// const express = require("express");

// const router = express.Router();

// // GET /api/v1/posts
// router.get("/", (req, res) => {
//   res.json({
//     message: "All posts fetched successfully",
//   });
// });

// module.exports = router;


const express = require("express");
const { getAllPosts } = require("../controllers/posts.controllers");

const router = express.Router();

// GET /api/v1/posts
router.get("/", getAllPosts);

module.exports = router;
