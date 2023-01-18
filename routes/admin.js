const authMW = require("../middleware/auth/authMW");
const renderMW = require("../middleware/renderMW");
const getExamMW = require("../middleware/exam/getExamMW");
const createExamMW = require("../middleware/exam/createExamMW");
const deleteExamMW = require("../middleware/exam/deleteExamMW");
const deleteStudentFromExamMW = require("../middleware/exam/deleteStudentFromExamMW");
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
    fillDateMW(objectRepository),
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
    "/admin/exam/del",
    authMW(objectRepository),
    deleteExamMW(objectRepository),
    renderMW(objectRepository, "admin")
  );

  /* kitöröl egy hallgatót egy adott alkalomról */
  app.post(
    "/admin/exam/student/del/:email",
    authMW(objectRepository),
    deleteStudentFromExamMW(objectRepository),
    fillDateMW(objectRepository),
    getExamMW(objectRepository),
    renderMW(objectRepository, "admin")
  );

  /* szerkeszt egy vizsgaalkalmat */
  app.post(
    "/admin/exam/edit",
    authMW(objectRepository),
    editExamMW(objectRepository),
    fillDateMW(objectRepository),
    getExamMW(objectRepository),
    renderMW(objectRepository, "admin")
  );

  /* hallgató törlése az adatbázisból */
  app.post(
    "/admin/student/del",
    authMW(objectRepository),
    deleteStudentMW(objectRepository),
    renderMW(objectRepository, "admin")
  );

  /* hallgató jelentekéseinek lekérése az adatbázisból */
  app.post(
    "/admin/student",
    authMW(objectRepository),
    getStudentRegistrationsMW(objectRepository),
    renderMW(objectRepository, "admin")
  );
};
