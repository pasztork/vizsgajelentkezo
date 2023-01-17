/* új vizsgaalkalom felvételekor kinyeri a dátumot a bementetről */
module.exports = function (objectRepository) {
  return function (req, res, next) {
    res.locals.date = req.query.date;
    return next();
  };
};
