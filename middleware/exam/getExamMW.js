/* dátum alapján megkeres egy vizsgaalkalmat */
module.exports = function (objectRepository) {
  return function (req, res, next) {
    res.locals.emails = [
      "pasztor.kristof.kp@gmail.com",
      "kpasztor@edu.bme.hu",
      "valami@email.com",
    ];
    return next();
  };
};
