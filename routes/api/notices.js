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
router.get("/:categoryName", ctrlWrapper(ctrl.getNoticesByCategory));

router.get("/favorite", authenticate, ctrlWrapper(ctrl.getFavoriteNotices));
router.post(
  "/favorite/:noticeId",
  isValidId,
  authenticate,
  ctrlWrapper(ctrl.addFavoriteNotice)
);
router.delete(
  "/favorite/:noticeId",
  authenticate,
  ctrlWrapper(ctrl.removeFavoriteNotice)
);

module.exports = router;
