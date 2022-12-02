const { Notice } = require("../../models/notice");
const { RequestError } = require("../../helpers");

const getNoticeOwner = async (req, res) => {
  const { noticeId } = req.params;
  console.log(noticeId);
  const currentNotice = await Notice.findById(noticeId).populate("owner");

  const result = currentNotice.owner;
  if (!noticeId) {
    throw RequestError(404);
  }
  res.status(200).json(result);
};

module.exports = getNoticeOwner;
