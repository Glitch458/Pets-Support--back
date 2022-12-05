const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/user");

const {
  isValidId,
  validateBody,
  authenticate,
  upload,
} = require("../../middlewares");

const { ctrlWrapper } = require("../../helpers");
const schemas = require("../../schemas");

// User
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrentUser));
router.patch(
  "/update",
  authenticate,
  upload.single("avatarURL"),
  validateBody(schemas.updateUserSchema),
  ctrlWrapper(ctrl.updateUser)
);

// Pets
router.post(
  "/pets",
  authenticate,
  upload.single("petURL"),
  validateBody(schemas.UserPetSchema),
  ctrlWrapper(ctrl.addUserPet)
);
router.get("/pets", authenticate, ctrlWrapper(ctrl.getUserPets));
router.delete(
  "/pets/:noticeId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.removeUserPet)
);

module.exports = router;
