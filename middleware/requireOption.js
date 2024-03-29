/* visszaadja a keresett (propertyName) modellt */
module.exports = function (objectRepository, propertyName) {
  if (!!objectRepository && !!objectRepository[propertyName]) {
    return objectRepository[propertyName];
  }
  throw new TypeError(`${propertyName} required`);
};
