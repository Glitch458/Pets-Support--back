const uploadImage = require("../../middlewares/cloudinary");

const { Notice } = require("../../models/notice");

const { RequestError } = require("../../helpers");

const addNotice = async (req, res) => {
  const { id: owner } = req.user;
  let noticeImg = null;

  if (!owner) {
    throw RequestError(404, "Not found");
  }

  if (req.file) {
    const file = req.file.buffer;
    const result1 = await uploadImage(file, "pets");
    noticeImg = result1.secure_url;
  } else {
    noticeImg = owner.photoURL;
  }

  const result = await Notice.create({
    ...req.body,
    photoURL: noticeImg,
    owner,
  });

  if (!result) {
    throw RequestError(404, "Not found");
  }

  res.status(201).json(result);
};

module.exports = addNotice;
