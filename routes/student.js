const renderMW = require("../middleware/renderMW");
const getAvailableDatesMW = require("../middleware/student/getAvailableDatesMW");
const createRegistrationMW = require("../middleware/student/createRegistrationMW");

module.exports = function (app) {
  const objectRepository = {};

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
