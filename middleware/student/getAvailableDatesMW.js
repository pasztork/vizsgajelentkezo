/* összegyűjti azokat a dátumokat, amikre még van szabad hely */
const requireOption = require("../requireOption");

module.exports = function (objectRepository) {
  const ExamModel = requireOption(objectRepository, "ExamModel");
  const StudentModel = requireOption(objectRepository, "StudentModel");

  return function (req, res, next) {
    res.locals.availableDates = ExamModel.find(
      {
        date: { $gt: new Date().toISOString().slice(0, 10) },
      },
      (error, exams) => {
        console.log(exams);
        if (error) {
          return next(error);
        }
        exams.filter((exam) => {
          return (
            !!exam.students &&
            exam.students.length < exam.students.maxStudentCount
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
