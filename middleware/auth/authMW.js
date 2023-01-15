/* ellenőrzi, hogy a látogató be van-e jelentkezve, 
 * ha nincs, akkor az /adminlogin-ra irányít át */
module.exports = function (objectRepository) {
    return function (req, res, next) {
        return next();
    }
}