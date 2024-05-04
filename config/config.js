const dotenv = require("dotenv");
dotenv.config();
const config = {
  PORT: String(process.env.PORT),
  MONGO_URL: String(process.env.MONGO_URL),
};

module.exports = config;
