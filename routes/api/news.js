const express = require("express");
const ctrl = require("../../controllers/news");
const { ctrlWrapper } = require("../../helpers/");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAllNews));
module.exports = router;
