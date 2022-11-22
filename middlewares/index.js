const validateBody = require("./validateBody");
const authenticate = require("./authenticate");
const isValidId = require("../middlewares/isValidId");
const upload = require("./upload");

module.exports = {
  validateBody,
  authenticate,
  isValidId,
  upload,
};
