const { Notice } = require("../../models/notice");
const User = require("../../models/user");

const removeMyAd = async (req, res) => {
  const { id: owner } = req.user;
  const { noticeId } = req.params;
  const removeMyAd = await Notice.findByIdAndRemove(noticeId);

  if (!removeMyAd) {
    res.status(404).json({ message: "Not found" });
  }

  const updateUser = await User.findByIdAndUpdate(
    { _id: owner },
    { $pull: { myPets: noticeId } }
  );

  res.json({ message: "ad deleted" });
};

module.exports = removeMyAd;
