const news = require("../../models/news/news");

const getAllNews = async (req, res, next) => {
  const result = await news.listNews();
  res.json(result);
};
module.exports = getAllNews;
