const express = require("express");
const ctrl = require("../../controllers/notices");
const router = express.Router();
const {
  isValidId,
  validateBody,
  authenticate,
  upload,
} = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers/");
const schemas = require("../../schemas/notice");

router.get("/:categoryName", ctrlWrapper(ctrl.getNoticesByCategory));
router.get("/id/:noticeId", isValidId, ctrlWrapper(ctrl.getNoticeById));
router.get("/ads/:userId", authenticate, ctrlWrapper(ctrl.getFavoriteNotices));
router.post(
  "/",
  authenticate,
  upload.single("uploadPhoto"),
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addNotice)
);
router.post(
  "/id/:noticeId",
  isValidId,
  authenticate,
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
