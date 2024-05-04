const mongoose = require("mongoose");
const config = require("./config");

const DBConn = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URL);
    console.log(`MONGO connection success, ${conn.connection.host}`);
  } catch (error) {
    console.log(`MONGO connection failed. ${error}`);
  }
};
module.exports = DBConn;
