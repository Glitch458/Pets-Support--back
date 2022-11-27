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

router.patch(
  "/:userId",
  authenticate,
  isValidId,
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

router.get("/favorite", authenticate, ctrlWrapper(ctrl.getFavoriteNotices));

router.post(
  "/favorite/:noticeId",
  isValidId,
  authenticate,
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete(
  "/favorite/:noticeId",
  authenticate,
  ctrlWrapper(ctrl.removeFavoriteNotice)
);

module.exports = router;
