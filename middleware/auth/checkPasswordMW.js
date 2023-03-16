const password = require("../loadPassword");

/* ellenőrzi a beírt jelszót, ha ok,
 * akkor átírányít /admin-ra */
module.exports = function (objectRepository) {
  return function (req, res, next) {
    if (
      typeof req.body.password === "undefined" ||
      req.body.password !== password
    ) {
      res.locals.badPass = true;
      return next();
    }
    req.session.loggedIn = true;
    return res.redirect("/admindate");
  };
};
