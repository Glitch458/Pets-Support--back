const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/user");

const {
  // isValidId,
  validateBody,
  authenticate,
  upload,
} = require("../../middlewares");

const { ctrlWrapper } = require("../../helpers/");
const schemas = require("../../schemas/userPet");

router.post(
  "/",
  authenticate,
  upload.single("uploadPhoto"),
  validateBody(schemas.addUserPetSchema),
  ctrlWrapper(ctrl.addUserPet)
);

module.exports = router;
