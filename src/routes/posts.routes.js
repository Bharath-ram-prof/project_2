const express = require("express");

const router = express.Router();

// GET /api/v1/posts
router.get("/", (req, res) => {
  res.json({
    message: "All posts fetched successfully",
  });
});

module.exports = router;
