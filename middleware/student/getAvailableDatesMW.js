const requireOption = require("../requireOption");

/* összegyűjti azokat a dátumokat, amikre még van szabad hely */
module.exports = function (objectRepository) {
  const ExamModel = requireOption(objectRepository, "ExamModel");

  return function (req, res, next) {
    res.locals.availableDates = ExamModel.find(
      {
        date: { $gt: new Date() },
      },
      (error, exams) => {
        if (error) {
          return next(error);
        }
        exams = exams.filter((exam) => {
          return (
            !!exam._students && exam._students.length < exam.maxStudentCount
          );
        });
        res.locals.availableDates = exams.map((e) =>
          e.date.toISOString().slice(0, 10)
        );
        return next();
      }
    );
  };
};
