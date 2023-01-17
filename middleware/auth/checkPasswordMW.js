/* ellenőrzi a beírt jelszót, ha ok,
 * akkor átírányít /admin-ra */
module.exports = function (objectRepository) {
  return function (req, res, next) {
    if (req.body.password === "alma123") {
      res.redirect("/admin");
    } else {
      res.redirect("/adminlogin");
    }
    return next();
  };
};
