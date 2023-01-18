const authMW = require("../middleware/auth/authMW");
const checkPasswordMW = require("../middleware/auth/checkPasswordMW");
const renderMW = require("../middleware/renderMW");
const ExamModel = require("../models/exam");
const StudentModel = require("../models/student");

module.exports = function (app) {
  const objectRepository = {
    ExamModel: ExamModel,
    StudentModel: StudentModel,
  };

  /* bejelentkező oldalt rendereli ki */
  app.get("/adminlogin", renderMW(objectRepository, "adminlogin"));

  /* admin bejelentkezés */
  app.post("/adminlogin/login", checkPasswordMW(objectRepository));
};
