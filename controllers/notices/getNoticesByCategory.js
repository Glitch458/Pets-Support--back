const { Notice } = require("../../models/notice");

const getNoticesByCategory = async (req, res) => {
  const { categoryName } = req.params;
  const result = await Notice.find({ category: categoryName });
  res.json(result);
};

module.exports = getNoticesByCategory;
