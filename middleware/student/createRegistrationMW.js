const ExamModel = require("../../models/exam");
const requireOption = require("../requireOption");

/* létrehoz egy új jelentkezést, amit egy hallgatóhoz és vizsgaalkalomhoz köt */
module.exports = function (objectRepository) {
  const StudentModel = requireOption(objectRepository, "StudentModel");

  return function (req, res, next) {
    if (typeof req.body === "undefined") {
      return next();
    }
    res.locals.registered = !!req.body.email;
    StudentModel.findOne({ email: req.body.email }, (err, student) => {
      if (err) {
        return next(err);
      }
      if (!student) {
        student = new StudentModel({
          name: req.body.name,
          email: req.body.email,
          registrations: [],
        });
      }
      if (student.registrations.includes(req.body.date)) {
        return next();
      }
      student.registrations.push(req.body.date);
      student.save((err) => {
        if (err) {
          res.locals.registered = false;
        }
        ExamModel.updateOne(
          { date: req.body.date },
          { $push: { _students: student._id } },
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
