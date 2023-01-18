const requireOption = require("../requireOption");

/* töröl egy vizsgaalkalmat */
module.exports = function (objectRepository) {
  const ExamModel = requireOption(objectRepository, "ExamModel");
  const StudentModel = requireOption(objectRepository, "StudentModel");

  return function (req, res, next) {
    ExamModel.findOne({ date: req.body.date }, (err, exam) => {
      if (err) {
        return next(err);
      }
      if (!exam) {
        return next();
      }
      exam.remove((err) => {
        if (err) {
          return next(err);
        }
        StudentModel.updateMany(
          { registrations: req.body.date },
          {
            $pull: { registrations: req.body.date },
          },
          (err) => {
            if (err) {
              return next(err);
            }
            return next();
          }
        );
      });
    });
  };
};
