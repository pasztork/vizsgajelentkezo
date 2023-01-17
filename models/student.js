const db = require("../config/db");

const StudentModel = db.model("Student", {
  email: { type: String, lowercase: true, trim: true },
});

module.exports = StudentModel;
