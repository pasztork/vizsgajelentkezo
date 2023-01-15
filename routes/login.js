let checkPasswordMW = require('../middleware/auth/checkPasswordMW');

module.exports = function (app) {
    let objectRepository = {};

    /* admin bejelentkezés */
    app.post('/adminlogin/login',
        checkPasswordMW(objectRepository)
    );
}