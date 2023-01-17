module.exports = function (objectRepository) {
  return function (req, res, next) {
    res.locals.registered = false;
    res.locals.availableDates = ["2023-01-13", "2023-01-16", "2023-01-17"];
    return next();
  };
};
