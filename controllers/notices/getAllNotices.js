const { Notice } = require("../../models/notice");

const getAllNotices = async (_, res) => {
  const result = await Notice.find({});
  res.json(result);
};

module.exports = getAllNotices;
