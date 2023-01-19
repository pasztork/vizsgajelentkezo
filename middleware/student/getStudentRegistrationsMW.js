const requireOption = require("../requireOption");

/* begyűjti a hallgatóhoz tartozó jelentkezéseket */
module.exports = function (objectRepository) {
  const StudentModel = requireOption(objectRepository, "StudentModel");

  return function (req, res, next) {
    StudentModel.findOne({ email: req.body.searchKey }, (err, student) => {
      if (err) {
        return next(err);
      }
      if (!student) {
        StudentModel.find({ name: req.body.searchKey }, (err, students) => {
          if (err) {
            return next(err);
          }
          if (!students) {
            return next();
          }
          res.locals.students = students.map((s) => ({
            name: s.name,
            email: s.email,
            registrations: s.registrations.map((r) =>
              r.toISOString().slice(0, 10)
            ),
          }));
          return next();
        });
      } else {
        res.locals.students = [
          {
            name: student.name,
            email: student.email,
            registrations: student.registrations.map((r) =>
              r.toISOString().slice(0, 10)
            ),
          },
        ];
        return next();
      }
    });
  };
};
