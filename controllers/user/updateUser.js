const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const User = require("../../models/user");
const { RequestError } = require("../../helpers");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateUser = async (req, res) => {
  const { _id } = req.user;

  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(avatarDir, originalname);

  Jimp.read(tempUpload, (error, photo) => {
    if (error) throw RequestError(401, "Not authorized");
    photo.resize(233, 233).write(resultUpload);
  });
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", originalname);

  const updateAvatar = await User.findByIdAndUpdate(
    _id,
    { avatarURL },
    {
      new: true,
    }
  );

  const result = await User.findByIdAndUpdate({ _id }, req.body, {
    new: true,
  });

  if (!result) {
    throw RequestError(404, "Not found");
  }

  res.json(result);
};

module.exports = updateUser;
