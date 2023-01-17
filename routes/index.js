const renderMW = require("../middleware/renderMW");

module.exports = function (app) {
  const objectRepository = {};

  /* az üdvözlő oldalt jeleníti meg */
  app.get("/", renderMW(objectRepository, "index"));
};
