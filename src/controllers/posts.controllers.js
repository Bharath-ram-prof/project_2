const getAllPosts = (req, res) => {
    res.json({
      message: "All posts fetched successfully",
    });
  };
  
  module.exports = {
    getAllPosts,
  };
  