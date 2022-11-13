const fs = require("fs").promises;
const path = require("path");
const sponsorsPath = path.join(__dirname, "../../", "data/sponsors.json");

const listSponsors = async () => {
  const data = await fs.readFile(sponsorsPath);
  return JSON.parse(data);
};

module.exports = { listSponsors };
