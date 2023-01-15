let createRegistrationMW = require('../middleware/student/createRegistrationMW');

module.exports = function (app) {
    let objectRepository = {};

    /* jelentkezés létrehozása */
    app.post('/student',
        createRegistrationMW(objectRepository)
    );
}