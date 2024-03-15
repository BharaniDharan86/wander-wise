export const getCurrentUser = (req, res, next) => {
  const { username, email, likedPosts, repliedPosts } = req.user;

  return res.status(200).json({
    username,
    email,
    likedPosts,
    repliedPosts,
  });
};
