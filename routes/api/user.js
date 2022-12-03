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

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrentUser));
router.get("/mypets", authenticate, ctrlWrapper(ctrl.getUserPets));

router.patch(
  "/update",
  authenticate,
  // upload.single("uploadAvatar"),
  validateBody(schemas.updateUserSchema),
  ctrlWrapper(ctrl.updateUser)
);

router.post(
  "/",
  authenticate,
  upload.single("uploadPhoto"),
  validateBody(schemas.UserPetSchema),
  ctrlWrapper(ctrl.addUserPet)
);

router.delete(
  "/:noticeId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.removeUserPet)
);

module.exports = router;
