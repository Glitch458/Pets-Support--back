const express = require("express");
const ctrl = require("../../controllers/notices");
const router = express.Router();
const { isValidId } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers/");

router.get("/:categoryName", ctrlWrapper(ctrl.getNoticesByCategory));
router.get("/id/:noticeId", isValidId, ctrlWrapper(ctrl.getNoticeById));

module.exports = router;
