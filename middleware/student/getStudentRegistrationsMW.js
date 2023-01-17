/* begyűjti a hallgatóhoz tartozó jelentkezéseket */
module.exports = function (objectRepository) {
  return function (req, res, next) {
    res.locals.student = {
      email: "valami@email.com",
      registrations: ["2023-01-13", "2023-01-16"],
    };
    return next();
  };
};
