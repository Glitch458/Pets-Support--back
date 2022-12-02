const getNoticesByCategory = require("./getNoticesByCategory");
const getNoticeById = require("./getNoticeById");
const addNotice = require("./addNotice");
const getFavoriteNotices = require("./getFavoriteNotices");
const addFavoriteNotice = require("./addFavoriteNotice");
const removeFavoriteNotice = require("./removeFavoriteNotice");
const getMyAds = require("./getMyAds");
const removeMyAd = require("./removeMyAd");
const getNoticeOwner = require("./getNoticeOwner");

module.exports = {
  getNoticesByCategory,
  getNoticeById,
  addNotice,
  getFavoriteNotices,
  addFavoriteNotice,
  removeFavoriteNotice,
  getMyAds,
  removeMyAd,
  getNoticeOwner,
};
