const User = require("../../models/user");
const RequestError = require("../../helpers/");

const getFavoriteNotices = async (req, res) => {
  const { id: userId } = req.user;
  const currentUser = await User.findOne({ _id: userId }).populate("favorites");

  const result = currentUser.favorites;

  if (!result) {
    throw RequestError(404);
  }
  res.status(200).json(result);
};

module.exports = getFavoriteNotices;
