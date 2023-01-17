/* létrehoz egy új jelentkezést, amit egy hallgatóhoz és vizsgaalkalomhoz köt */
module.exports = function (objectRepository) {
  return function (req, res, next) {
    res.locals.registered = true;
    return next();
  };
};
