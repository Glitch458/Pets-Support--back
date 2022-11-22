const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { Notice } = require("../../models/notice");

const { RequestError } = require("../../helpers");

const photoDir = path.join(__dirname, "../../", "public", "pets");

const addNotice = async (req, res) => {
  const { id: owner } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(photoDir, originalname);
  Jimp.read(tempUpload, (error, photo) => {
    if (error) throw RequestError(401, "Not authorized");
    photo.resize(328, 328).write(resultUpload);
  });
  await fs.rename(tempUpload, resultUpload);
  const photoURL = path.join("pets", originalname);
  const result = await Notice.create({ ...req.body, photoURL, owner });
  res.status(201).json(result);
};

module.exports = addNotice;
