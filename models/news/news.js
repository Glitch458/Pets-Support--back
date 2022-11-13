const fs = require("fs").promises;
const path = require("path");
const newsPath = path.join(__dirname, "news.json");

const listNews = async () => {
  const data = await fs.readFile(newsPath);
  return JSON.parse(data);
};

module.exports = { listNews };
