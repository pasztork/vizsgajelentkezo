const Schema = require("mongoose").Schema;
const db = require("../config/db");

/* a vizsgaalkalmak modellje */
const ExamModel = db.model("Exam", {
  date: Date,
  maxStudentCount: { type: Number, min: 1, max: 4 },
  _students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
});

module.exports = ExamModel;
