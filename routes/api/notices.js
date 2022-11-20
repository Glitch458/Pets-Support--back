const express = require("express");
const ctrl = require("../../controllers/notices");
const router = express.Router();
const { isValidId, validateBody, authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers/");
const schemas = require("../../schemas/notice");

router.get("/:categoryName", ctrlWrapper(ctrl.getNoticesByCategory));
router.get("/id/:noticeId", isValidId, ctrlWrapper(ctrl.getNoticeById));
router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addNotice)
);

module.exports = router;
