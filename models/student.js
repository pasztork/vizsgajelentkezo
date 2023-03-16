const Schema = require("mongoose").Schema;
const db = require("../config/db");

/* a hallgatók modellje */
const StudentModel = db.model("Student", {
  name: String,
  email: { type: String, lowercase: true, trim: true },
  registrations: [{ type: Date }],
});

module.exports = StudentModel;
