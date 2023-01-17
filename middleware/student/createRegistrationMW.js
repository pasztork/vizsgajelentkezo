/* létrehoz egy új jelentkezést, amit egy hallgatóhoz és vizsgaalkalomhoz köt */
module.exports = function (objectRepository) {
  return function (req, res, next) {
    if (typeof req.body === "undefined") {
      return next();
    }
    res.locals.registered = !!req.body.email;
    return next();
  };
};
