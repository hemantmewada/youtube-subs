const config = require("./config/config");
const DBConn = require("./config/db");
const app = require("./app");
const PORT = config.PORT || 3002;

DBConn().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
