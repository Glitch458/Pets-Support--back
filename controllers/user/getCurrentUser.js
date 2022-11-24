const User = require("../../models/user");

const getCurrentUser = async (req, res) => {
  const { id: owner } = req.user;

  const result = await User.findById(owner);
  res.json(result);
};

module.exports = getCurrentUser;
