const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'All posts fetched successfully',
    data: {
      posts: [
        { id: 1, title: 'First Post' },
        { id: 2, title: 'Second Post' }
      ]
    }
  });
};

// Get post by ID
const getPostById = (req, res) => {
  const postId = req.params.id;

  // Example: pretend we only have posts with IDs 1 and 2
  if (postId === '1' || postId === '2') {
    res.status(200).json({
      success: true,
      data: { postId }
    });
  } else {
    res.status(404).json({
      success: false,
      error: { message: `Post with ID ${postId} not found` }
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById
};