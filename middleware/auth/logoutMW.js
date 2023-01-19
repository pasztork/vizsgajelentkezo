/* megsemmisíti az aktív session-t */
module.exports = function (objectRepository) {
  return function (req, res, next) {
    req.session.destroy((err) => {
      return next();
    });
  };
};
