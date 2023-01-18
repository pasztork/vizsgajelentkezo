/* ellenőrzi, hogy a látogató be van-e jelentkezve,
 * ha nincs, akkor az /adminlogin-ra irányít át */
module.exports = function (objectRepository) {
  return function (req, res, next) {
    if (typeof req.session.loggedIn === "undefined" || !req.session.loggedIn) {
      return res.redirect("/adminlogin");
    }
    return next();
  };
};
