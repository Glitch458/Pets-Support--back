const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const { UserPet } = require("../../models/userPet");
const { RequestError } = require("../../helpers");

const addUserPet = async (req, res) => {
  const { id: owner } = req.user;
  let userPetImage = null;

  if (!owner) {
    throw RequestError(404, "Not found");
  }

  if (req.file) {
    const result1 = await cloudinary.uploader.upload(req.file.path);
    userPetImage = result1.secure_url;
  } else {
    userPetImage = owner.photoURL;
  }

  const result = await UserPet.create({
    ...req.body,
    photoURL: userPetImage,
    owner,
  });

  if (!result) {
    throw RequestError(404, "Not found");
  }

  res.status(201).json(result);
  await fs.unlink(req.file.path);
};

module.exports = addUserPet;
