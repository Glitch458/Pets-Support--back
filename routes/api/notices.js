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

router.post(
  "/",
  authenticate,
  upload.single("uploadPhoto"),
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addNotice)
);
router.get("/id/:noticeId", isValidId, ctrlWrapper(ctrl.getNoticeById));
router.delete("/id/:noticeId", isValidId, ctrlWrapper(ctrl.removeNoticeById));
router.get("/favorite", authenticate, ctrlWrapper(ctrl.getFavoriteNotices));
router.post(
  "/id/:noticeId",
  isValidId,
  authenticate,
  ctrlWrapper(ctrl.updateFavorite)
);
router.get("/:categoryName", ctrlWrapper(ctrl.getNoticesByCategory));

module.exports = router;
