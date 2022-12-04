const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const { Notice } = require("../../models/notice");

const { RequestError } = require("../../helpers");

const addNotice = async (req, res) => {
  const { id: owner } = req.user;
  let noticeImg = null;

  if (!owner) {
    throw RequestError(404, "Not found");
  }

  if (req.file) {
    const result1 = await cloudinary.uploader.upload(req.file.path);
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
  await fs.unlink(req.file.path);
};

module.exports = addNotice;
