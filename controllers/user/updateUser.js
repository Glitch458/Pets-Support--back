const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const User = require("../../models/user");
const { RequestError } = require("../../helpers");

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { name, email, birthday, phone, city } = req.body;
  let avatar = null;

  if (!_id) {
    throw RequestError(404, "Not found");
  }

  if (req.file) {
    const result1 = await cloudinary.uploader.upload(req.file.path);
    avatar = result1.secure_url;
  } else {
    avatar = _id.avatarURL;
  }

  const result = await User.findByIdAndUpdate(
    _id,
    {
      avatarURL: avatar,
      name,
      email,
      birthday,
      phone,
      city,
    },
    {
      new: true,
    }
  );

  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
  await fs.unlink(req.file.path);
};

module.exports = updateUser;
