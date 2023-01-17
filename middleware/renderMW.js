/* renderel a template motor segítségével */
module.exports = function (objectRepository, viewName) {
  return function (req, res) {
    res.render(viewName, res.locals);
  };
};
