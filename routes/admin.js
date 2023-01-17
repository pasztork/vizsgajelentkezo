const authMW = require("../middleware/auth/authMW");
const renderMW = require("../middleware/renderMW");
const getExamMW = require("../middleware/exam/getExamMW");
const createExamMW = require("../middleware/exam/createExamMW");
const deleteExamMW = require("../middleware/exam/deleteExamMW");
const editExamMW = require("../middleware/exam/editExamMW");
const getStudentRegistrationsMW = require("../middleware/student/getStudentRegistrationsMW");
const deleteStudentMW = require("../middleware/student/deleteStudentMW");
const fillDateMW = require("../middleware/exam/fillDateMW");
const ExamModel = require("../models/exam");
const StudentModel = require("../models/student");

module.exports = function (app) {
  const objectRepository = {
    ExamModel: ExamModel,
    StudentModel: StudentModel,
  };

  /* lehetőségek mutatása */
  app.get(
    "/admin",
    authMW(objectRepository),
    renderMW(objectRepository, "admin")
  );

  /* egy vizsgaalkalomhoz tartozó emailek listázása */
  app.get(
    "/admin/exam",
    authMW(objectRepository),
    getExamMW(objectRepository),
    renderMW(objectRepository, "admin")
  );

  /* egy új vizsgalkalom létrehozásához szükséges UI kitöltése */
  app.get(
    "/admin/exam/new",
    authMW(objectRepository),
    fillDateMW(objectRepository),
    renderMW(objectRepository, "admin")
  );

  /* vizsgaalkalom létrehozása */
  app.post(
    "/admin/exam/new",
    authMW(objectRepository),
    createExamMW(objectRepository),
    renderMW(objectRepository, "admin")
  );

  /* töröl egy vizsgaalkalmat */
  app.post(
    "/admin/exam/del/:examid",
    authMW(objectRepository),
    deleteExamMW(objectRepository),
    renderMW(objectRepository, "admin")
  );

  /* szerkeszt egy vizsgaalkalmat */
  app.post(
    "/admin/exam/edit/:examid",
    authMW(objectRepository),
    editExamMW(objectRepository),
    renderMW(objectRepository, "admin")
  );

  /* hallgató jelentekéseinek lekérése az adatbázisból */
  app.get(
    "/admin/student/:studentid",
    authMW(objectRepository),
    getStudentRegistrationsMW(objectRepository),
    renderMW(objectRepository, "admin")
  );

  /* hallgató törlése az adatbázisból */
  app.post(
    "/admin/student/del/:studentid",
    authMW(objectRepository),
    deleteStudentMW(objectRepository),
    renderMW(objectRepository, "admin")
  );
};
