const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { UserPet } = require("../../models/userPet");
const User = require("../../models/user");

const { RequestError } = require("../../helpers");
const photoDir = path.join(__dirname, "../../", "public", "pets");

const addUserPet = async (req, res) => {
  const { id: owner } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(photoDir, originalname);

  Jimp.read(tempUpload, (error, photo) => {
    if (error) throw RequestError(401, "Not authorized");
    photo.resize(328, 328).write(resultUpload);
  });
  await fs.rename(tempUpload, resultUpload);
  const photoURL = path.join("pets", originalname);

  const userNotice = await UserPet.create({
    ...req.body,
    photoURL,
    owner,
  });

  const result = await User.findByIdAndUpdate(
    { _id: owner },
    { $push: { myPets: userNotice } }
  );
  res.json(userNotice);
};

module.exports = addUserPet;
