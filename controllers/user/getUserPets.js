const User = require("../../models/user");
const RequestError = require("../../helpers");

const getUserPets = async (req, res) => {
  const { id: userId } = req.user;

  const currentUser = await User.findOne({ _id: userId }).populate("myPets");

  const result = currentUser.myPets;

  if (!result) {
    throw RequestError(404);
  }
  res.status(200).json(result);
};

module.exports = getUserPets;
