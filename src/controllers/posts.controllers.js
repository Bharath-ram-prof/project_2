// exports.getPostById = async (req, res) => {
//   try {
//     const postId = req.params.postId;

//     res.status(200).json({
//       message: "Fetching data for post with ID: " + postId
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Something went wrong",
//       error: error.message
//     });
//   }
// };

// Fake data (acts like database)
const posts = [
  { id: "1", title: "First Post", content: "Hello World" },
  { id: "2", title: "Second Post", content: "Learning Node" }
];

// GET ALL POSTS
const getAllPosts = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        posts
      }
    });
  } catch (error) {
    next(error);
  }
};

// GET POST BY ID
const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = posts.find(p => p.id === id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    res.status(200).json({
      success: true,
      data: {
        post
      }
    });

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  getPostById
};


  