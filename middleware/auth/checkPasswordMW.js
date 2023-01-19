/* ellenőrzi a beírt jelszót, ha ok,
 * akkor átírányít /admin-ra */
module.exports = function (objectRepository) {
  return function (req, res, next) {
    if (
      typeof req.body.password === "undefined" ||
      req.body.password !== "alma123"
    ) {
      res.locals.badPass = true;
      return next();
    }
    req.session.loggedIn = true;
    return res.redirect("/admin");
  };
};
