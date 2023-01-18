/* ellenőrzi a beírt jelszót, ha ok,
 * akkor átírányít /admin-ra */
module.exports = function (objectRepository) {
  return function (req, res, next) {
    if (
      typeof req.body.password === "undefined" ||
      req.body.password !== "alma123"
    ) {
      return res.redirect("/adminlogin");
    }
    req.session.loggedIn = true;
    return res.redirect("/admin");
  };
};
