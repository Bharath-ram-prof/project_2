exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;

    res.status(200).json({
      message: "Fetching data for post with ID: " + postId
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message
    });
  }
};

  