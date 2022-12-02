const getNoticeById = require("./getNoticeById");
const RequestError = require("../../helpers");

const getNoticeOwner = async (req, res) => {
  const { id: noticeId } = req.params;

  const noticeOwner = await getNoticeById.populate("owner");

  const result = noticeOwner.owner;

  if (!result) {
    throw RequestError(404);
  }
  res.status(200).json(result);
};

module.exports = getNoticeOwner;
