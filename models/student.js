const Schema = require("mongoose").Schema;
const db = require("../config/db");

const StudentModel = db.model("Student", {
  email: { type: String, lowercase: true, trim: true },
  registrations: [{ type: Date }],
});

module.exports = StudentModel;
