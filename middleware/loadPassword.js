/* betölti a statikusan megadott jelszót */
const fs = require("fs");
const path = require("path").join(__dirname, "..", "private", "password.txt");
module.exports = fs.readFileSync(path, "utf-8");
