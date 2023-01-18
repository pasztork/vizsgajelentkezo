const requireOption = require("../requireOption");

/* hallagtót töröl egy konkrét alkalomról */
module.exports = function (objectRepository) {
  const ExamModel = requireOption(objectRepository, "ExamModel");
  const StudentModel = requireOption(objectRepository, "StudentModel");

  return function (req, res, next) {
    StudentModel.findOne({ email: req.params.email }, (err, student) => {
      if (err) {
        return next(err);
      }
      const index = student.registrations.indexOf(req.body.date);
      student.registrations.splice(index, 1);
      student.save((err) => {
        if (err) {
          return next(err);
        }
        ExamModel.updateOne(
          { _student: student._id, date: req.body.date },
          { $pull: { _student: student._id } },
          (err) => {
            if (err) {
              return next(err);
            }
            res.locals.date = req.body.date;
            return next();
          }
        );
      });
    });
  };
};
