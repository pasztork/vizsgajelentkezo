const requireOption = require("../requireOption");

/* begyűjti a hallgatóhoz tartozó jelentkezéseket */
module.exports = function (objectRepository) {
  const StudentModel = requireOption(objectRepository, "StudentModel");

  return function (req, res, next) {
    StudentModel.findOne({ email: req.body.email }, (err, student) => {
      if (err) {
        return next(err);
      }
      if (!student) {
        res.locals.noStudentWithEmail = true;
        return next();
      }
      res.locals.student = {
        name: student.name,
        email: student.email,
        registrations: student.registrations.map((r) =>
          r.toISOString().slice(0, 10)
        ),
      };
      return next();
    });
  };
};
