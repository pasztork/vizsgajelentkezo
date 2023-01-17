const renderMW = require("../middleware/renderMW");

module.exports = function (app) {
  const objectRepository = {};
  app.get("/", renderMW(objectRepository, "index"));
};
