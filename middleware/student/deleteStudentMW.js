const requireOption = require("../requireOption");

/* töröl egy hallgatót az adatbázisból */
module.exports = function (objectRepository) {
  const ExamModel = requireOption(objectRepository, "ExamModel");
  const StudentModel = requireOption(objectRepository, "StudentModel");

  return function (req, res, next) {
    StudentModel.findOne({ email: req.body.email }, (err, student) => {
      if (err) {
        return next(err);
      }
      if (!student) {
        return next();
      }
      const id = student._id;
      student.remove((err) => {
        if (err) {
          return next(err);
        }
        ExamModel.updateMany(
          { _students: id },
          {
            $pull: { _students: id },
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
