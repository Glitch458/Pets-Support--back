const User = require("../../models/user");

const getOwnerNotices = async (req, res) => {
  const { userId } = req.params;
  const result = await User.findOne({ _id: userId }).populate("favorites");

  if (!result) {
    throw RequestError(404);
  }
  res.status(200).json(result);
};

module.exports = getOwnerNotices;
