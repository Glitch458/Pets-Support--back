const express = require("express");
const ctrl = require("../../controllers/notices");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers/");

router.get("/:categoryName", ctrlWrapper(ctrl.getNoticesByCategory));

module.exports = router;
