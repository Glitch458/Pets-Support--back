const { UserPet } = require("../../models/userPet");
const RequestError = require("../../helpers");

const getMyAds = async (req, res) => {
  const { id: userId } = req.user;
  console.log(req.user);

  const result = await UserPet.find({ owner: userId });

  if (!result) {
    throw RequestError(404, "Not found");
  }

  res.json(result);
};

module.exports = getMyAds;
