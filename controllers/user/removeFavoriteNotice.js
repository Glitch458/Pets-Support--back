const User = require("../../models/user");

const removeFavoriteNotice = async (req, res) => {
  const { id: owner } = req.user;
  const { noticeId } = req.params;
  const removeUserNotice = await User.findByIdAndUpdate(
    { _id: owner },
    { $pull: { favorites: noticeId } }
  );

  if (!removeUserNotice) {
    res.status(404).json({ message: "Not found" });
  }

  // const updateUser = await User.findByIdAndUpdate(
  //   { _id: owner },
  //   { $pull: { favorites: noticeId } }
  // );

  res.status(200).json({ message: "notice deleted" });
};

module.exports = removeFavoriteNotice;
