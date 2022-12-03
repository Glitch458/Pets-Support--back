const { Notice } = require("../../models/notice");
const RequestError = require("../../helpers");

const getMyAds = async (req, res) => {
  const { id: userId } = req.user;
  const result = await Notice.find({ owner: userId });

  if (!result) {
    throw RequestError(404, "Not found");
  }

  res.json(result);
};

module.exports = getMyAds;
