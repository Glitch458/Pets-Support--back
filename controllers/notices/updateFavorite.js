const User = require("../../models/user");

const updateFavorite = async (req, res) => {
  const { noticeId } = req.params;
  const { id: userId } = req.user;
  const result = await User.findByIdAndUpdate(
    { _id: userId },
    { $push: { favorites: noticeId } }
  );

  if (!result) {
    throw RequestError(404);
  }
  res.json(result);
};

module.exports = updateFavorite;
