const sponsors = require("../../models/sponsors/sponsors");

const getAllSponsors = async (req, res, next) => {
  const result = await sponsors.listSponsors();
  res.json(result);
};
module.exports = getAllSponsors;
