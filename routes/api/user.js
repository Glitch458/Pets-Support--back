const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/user");

const {
  isValidId,
  validateBody,
  authenticate,
  upload,
} = require("../../middlewares");

const { ctrlWrapper } = require("../../helpers/");
const schemas = require("../../schemas/userPet");

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrentUser));

router.post(
  "/",
  authenticate,
  upload.single("uploadPhoto"),
  validateBody(schemas.addUserPetSchema),
  ctrlWrapper(ctrl.addUserPet)
);

router.delete(
  "/:noticeId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.removeUserPet)
);

module.exports = router;
