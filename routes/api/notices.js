const express = require("express");
const ctrl = require("../../controllers/notices");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers/");

router.get("/", ctrlWrapper(ctrl.getAllNotices));

module.exports = router;
