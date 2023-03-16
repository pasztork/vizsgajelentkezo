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

  /* vizsgaalkalommal kapcsolatos lehetőségek listázása */
  app.get(
    "/admindate",
    authMW(objectRepository),
    renderMW(objectRepository, "admindate")
  );

  /* vizsgaalkalommal kapcsolatos lehetőségek listázása */
  app.get(
    "/adminstudents",
    authMW(objectRepository),
    renderMW(objectRepository, "adminstudents")
  );

  /* egy vizsgaalkalomhoz tartozó emailek listázása */
  app.get(
    "/admin/exam",
    authMW(objectRepository),
    fillDateMW(objectRepository),
    getExamMW(objectRepository),
    renderMW(objectRepository, "admindate")
  );

  /* egy új vizsgalkalom létrehozásához szükséges UI kitöltése */
  app.get(
    "/admin/exam/new",
    authMW(objectRepository),
    fillDateMW(objectRepository),
    renderMW(objectRepository, "admindate")
  );

  /* vizsgaalkalom létrehozása */
  app.post(
    "/admin/exam/new",
    authMW(objectRepository),
    createExamMW(objectRepository),
    renderMW(objectRepository, "admindate")
  );

  /* töröl egy vizsgaalkalmat */
  app.post(
    "/admin/exam/del",
    authMW(objectRepository),
    deleteExamMW(objectRepository),
    renderMW(objectRepository, "admindate")
  );

  /* kitöröl egy hallgatót egy adott alkalomról */
  app.post(
    "/admin/exam/student/del/:email",
    authMW(objectRepository),
    deleteStudentFromExamMW(objectRepository),
    fillDateMW(objectRepository),
    getExamMW(objectRepository),
    renderMW(objectRepository, "admindate")
  );

  /* szerkeszt egy vizsgaalkalmat */
  app.post(
    "/admin/exam/edit",
    authMW(objectRepository),
    editExamMW(objectRepository),
    fillDateMW(objectRepository),
    getExamMW(objectRepository),
    renderMW(objectRepository, "admindate")
  );

  /* hallgató törlése az adatbázisból */
  app.post(
    "/admin/student/del",
    authMW(objectRepository),
    deleteStudentMW(objectRepository),
    renderMW(objectRepository, "adminstudents")
  );

  /* hallgató jelentekéseinek lekérése az adatbázisból */
  app.post(
    "/admin/student",
    authMW(objectRepository),
    getStudentRegistrationsMW(objectRepository),
    renderMW(objectRepository, "adminstudents")
  );
};
