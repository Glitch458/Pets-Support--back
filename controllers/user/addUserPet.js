// const fs = require("fs/promises");
// const cloudinary = require("cloudinary").v2;

const uploadImage = require("../../middlewares/cloudinary");

const { UserPet } = require("../../models/userPet");
const { RequestError } = require("../../helpers");

const addUserPet = async (req, res) => {
  const { id: owner } = req.user;
  // console.log(req.user);

  let userPetImage = null;

  if (!owner) {
    throw RequestError(404, "Not found");
  }

  if (req.file) {
    const file = req.file.buffer;
    const result1 = await uploadImage(file, "pets");
    userPetImage = result1.secure_url;
  } else {
    userPetImage = owner.petURL;
  }

  const result = await UserPet.create({
    ...req.body,
    petURL: userPetImage,
    owner,
  });

  if (!result) {
    throw RequestError(404, "Not found");
  }

  res.json(result);
  // await fs.unlink(req.file.path);
};

module.exports = addUserPet;
