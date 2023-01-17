const authMW = require("../middleware/auth/authMW");
const renderMW = require("../middleware/renderMW");

const getExamMW = require("../middleware/exam/getExamMW");
const createExamMW = require("../middleware/exam/createExamMW");
const deleteExamMW = require("../middleware/exam/deleteExamMW");
const editExamMW = require("../middleware/exam/editExamMW");
const getStudentRegistrationsMW = require("../middleware/student/getStudentRegistrationsMW");
const deleteStudentMW = require("../middleware/student/deleteStudentMW");

module.exports = function (app) {
  let objectRepository = {};

  /* lehetőségek mutatása */
  app.get(
    "/adminlogin",
    authMW(objectRepository),
    renderMW(objectRepository, "adminlogin")
  );

  /* lehetőségek mutatása */
  app.get(
    "/admin",
    authMW(objectRepository),
    renderMW(objectRepository, "admin")
  );

  /* egy vizsgaalkalom letöltése */
  app.get(
    "/admin/exam",
    authMW(objectRepository),
    getExamMW(objectRepository),
    renderMW(objectRepository, "")
  );

  /* vizsgaalkalom létrehozása */
  app.post(
    "admin/exam",
    authMW(objectRepository),
    createExamMW(objectRepository)
  );

  /* töröl egy vizsgaalkalmat */
  app.delete(
    "admin/exam/:examid",
    authMW(objectRepository),
    getExamMW(objectRepository),
    deleteExamMW(objectRepository)
  );

  /* szerkeszt egy vizsgaalkalmat */
  app.put(
    "admin/exam/:examid",
    authMW(objectRepository),
    getExamMW(objectRepository),
    editExamMW(objectRepository),
    renderMW(objectRepository)
  );

  /* hallgató jelentekéseinek lekérése az adatbázisból */
  app.get(
    "/admin/student/:studentid",
    authMW(objectRepository),
    getStudentRegistrationsMW(objectRepository),
    renderMW(objectRepository)
  );

  /* hallgató törlése az adatbázisból */
  app.delete(
    "/admin/student/:studentid",
    authMW(objectRepository),
    deleteStudentMW(objectRepository),
    renderMW(objectRepository)
  );
};
