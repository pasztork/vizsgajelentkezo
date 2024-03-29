const requireOption = require("../requireOption");

/* létrehoz egy új vizsgaalkalmat */
module.exports = function (objectRepository) {
  const ExamModel = requireOption(objectRepository, "ExamModel");

  return function (req, res, next) {
    ExamModel.findOne({ date: req.body.date }, (err, exam) => {
      if (err) {
        return next(err);
      }
      if (exam) {
        return next();
      }
      const newExam = new ExamModel({
        date: new Date(req.body.date).toISOString().slice(0, 10),
        maxStudentCount: req.body.max,
        _students: [],
      });
      newExam.save((err) => {
        if (err) {
          return next(err);
        }
        return next();
      });
    });
  };
};
