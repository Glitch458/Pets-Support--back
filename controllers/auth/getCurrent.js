const getCurrent = async (req, res) => {
  const { email, name } = req.user;
  res.json({
    user: {
      email,
      name,
    },
  });
};

module.exports = getCurrent;
