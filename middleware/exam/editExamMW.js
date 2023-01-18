const requireOption = require("../requireOption");

/* frissíti egy vizsgaalkalom adatait */
module.exports = function (objectRepository) {
  const ExamModel = requireOption(objectRepository, "ExamModel");

  return function (req, res, next) {
    ExamModel.updateOne(
      { date: req.body.date },
      { $set: { maxStudentCount: req.body.max } },
      (err) => {
        if (err) {
          return next(err);
        }
        res.locals.date = req.body.date;
        return next();
      }
    );
  };
};
