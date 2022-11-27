const getNoticesByCategory = require("./getNoticesByCategory");
const getNoticeById = require("./getNoticeById");
const addNotice = require("./addNotice");
const getFavoriteNotices = require("./getFavoriteNotices");
const addFavoriteNotice = require("./addFavoriteNotice");
const removeFavoriteNotice = require("./removeFavoriteNotice");

module.exports = {
  getNoticesByCategory,
  getNoticeById,
  addNotice,
  getFavoriteNotices,
  addFavorite,
  removeFavoriteNotice,
};
