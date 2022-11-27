const getCurrentUser = require("./getCurrentUser");
const updateUser = require("./updateUser");
const addUserPet = require("./addUserPet");
const removeUserPet = require("./removeUserPet");
const getFavoriteNotices = require("./getFavoriteNotices");
const updateFavorite = require("./updateFavorite");
const removeFavoriteNotice = require("./removeFavoriteNotice");

module.exports = {
  getCurrentUser,
  updateUser,
  addUserPet,
  removeUserPet,
  getFavoriteNotices,
  updateFavorite,
  removeFavoriteNotice,
};
