const { Notice } = require("../../models/notice");
const { RequestError } = require("../../helpers");

const removeNoticeById = async (req, res) => {
  const { noticeId } = req.params;
  const result = await Notice.findByIdAndRemove(noticeId);
  if (!noticeId) {
    throw RequestError(404);
  }
  res.status(200).json(result);
};

module.exports = removeNoticeById;
