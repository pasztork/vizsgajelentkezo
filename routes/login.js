const authMW = require("../middleware/auth/authMW");
const checkPasswordMW = require("../middleware/auth/checkPasswordMW");
const renderMW = require("../middleware/renderMW");

module.exports = function (app) {
  let objectRepository = {};

  /* bejelentkező oldalt rendereli ki */
  app.get(
    "/adminlogin",
    authMW(objectRepository),
    renderMW(objectRepository, "adminlogin")
  );

  /* admin bejelentkezés */
  app.post("/adminlogin/login", checkPasswordMW(objectRepository));
};
