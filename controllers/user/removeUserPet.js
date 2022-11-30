const { UserPet } = require("../../models/userPet");
const User = require("../../models/user");

const removeUserPet = async (req, res) => {
  const { id: owner } = req.user;
  const { noticeId } = req.params;
  const removeUserPet = await UserPet.findByIdAndRemove(noticeId);

  if (!removeUserPet) {
    res.status(404).json({ message: "Not found" });
  }

  const updateUser = await User.findByIdAndUpdate(
    { _id: owner },
    { $pull: { myPets: noticeId } }
  );

  res.status(200).json({ message: "ad deleted" });
};

module.exports = removeUserPet;
