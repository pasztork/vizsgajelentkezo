const renderMW = require("../middleware/renderMW");
const getAvailableDatesMW = require("../middleware/student/getAvailableDatesMW");
const createRegistrationMW = require("../middleware/student/createRegistrationMW");
const ExamModel = require("../models/exam");
const StudentModel = require("../models/student");

module.exports = function (app) {
  const objectRepository = {
    ExamModel: ExamModel,
    StudentModel: StudentModel,
  };

  /* kirendereli a jelentkezéshez használt oldalt */
  app.get(
    "/student",
    getAvailableDatesMW(objectRepository),
    renderMW(objectRepository, "student")
  );

  /* jelentkezés létrehozása */
  app.post(
    "/student/new",
    createRegistrationMW(objectRepository),
    renderMW(objectRepository, "student")
  );
};
