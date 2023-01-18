const requireOption = require("../requireOption");

/* dátum alapján megkeres egy vizsgaalkalmat */
module.exports = function (objectRepository) {
  const ExamModel = requireOption(objectRepository, "ExamModel");
  const StudentModel = requireOption(objectRepository, "StudentModel");

  return function (req, res, next) {
    ExamModel.findOne(
      { date: req.query.date || res.locals.date },
      (err, exam) => {
        if (err) {
          return next(err);
        }
        if (!exam) {
          res.locals.emails = undefined;
          res.locals.date = undefined;
          return next();
        }
        StudentModel.find({ registrations: exam.date }, (err, students) => {
          if (err) {
            return next(err);
          }
          if (!students) {
            return next();
          }
          res.locals.emails = students.map((s) => s.email);
          res.locals.max = exam.maxStudentCount;
          return next();
        });
      }
    );
  };
};
