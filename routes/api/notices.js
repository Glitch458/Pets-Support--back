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

router.get("/id/:noticeId", isValidId, ctrlWrapper(ctrl.getNoticeById));
router.post(
  "/id/:noticeId",
  isValidId,
  authenticate,
  ctrlWrapper(ctrl.updateFavorite)
);
router.get("/favorite", authenticate, ctrlWrapper(ctrl.getFavoriteNotices));
router.get("/:categoryName", ctrlWrapper(ctrl.getNoticesByCategory));
router.post(
  "/",
  authenticate,
  upload.single("uploadPhoto"),
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addNotice)
);

module.exports = router;
