const express = require("express");
const router = require("./routes/router");
const app = express();
const path = require("path");
app.use(express.json());

// Your code goes here
// home route

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.use("/", router);
module.exports = app;
