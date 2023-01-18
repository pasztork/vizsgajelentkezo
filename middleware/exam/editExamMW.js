const requireOption = require("../requireOption");

/* frissíti egy vizsgaalkalom adatait */
module.exports = function (objectRepository) {
  const ExamModel = requireOption(objectRepository, "ExamModel");
  const StudentModel = requireOption(objectRepository, "StudentModel");
  return function (req, res, next) {
    return next();
  };
};
