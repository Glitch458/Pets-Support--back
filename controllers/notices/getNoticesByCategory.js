const { Notice } = require("../../models/notice");
const { RequestError } = require("../../helpers");

const getNoticesByCategory = async (req, res) => {
  const { categoryName } = req.params;
  const result = await Notice.find({ category: categoryName });
  if (!result) {
    throw RequestError(404);
  }
  res.json(result);
};

module.exports = getNoticesByCategory;
