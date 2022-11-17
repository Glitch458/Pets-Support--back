const { RequestError } = require("../../helpers");
const { Notice } = require("../../models/notice");

const getNoticeById = async (req, res) => {
  const { noticeId } = req.params;
  console.log(noticeId);
  const result = await Notice.findById(noticeId);
  if (!noticeId) {
    throw RequestError(404);
  }
  res.status(200).json(result);
};

module.exports = getNoticeById;
