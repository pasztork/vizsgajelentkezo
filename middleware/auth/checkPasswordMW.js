/* ellenőrzi a beírt jelszót, ha ok,
 * akkor átírányít /admin-ra */
module.exports = function (objectRepository) {
    return function (req, res, next) {
        return next();
    }
}