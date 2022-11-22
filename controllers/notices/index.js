const getNoticesByCategory = require("./getNoticesByCategory");
const getNoticeById = require("./getNoticeById");
const addNotice = require("./addNotice");
const updateFavorite = require("./updateFavorite");
const getFavoriteNotices = require("./getFavoriteNotices");

module.exports = {
  getNoticesByCategory,
  getNoticeById,
  addNotice,
  updateFavorite,
  getFavoriteNotices,
};
