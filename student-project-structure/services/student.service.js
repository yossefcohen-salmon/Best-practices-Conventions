const { MIN_GRADE } = require("../consts/grade");
const { StudentStatus } = require("../enums/student");
const { Student } = require("../models/student");
const { saveStudent } = require("../repositories/student-repository");
const { roundToTwoDecimals } = require("../utils/numbers");

function createStudent(name, grade) {
  if (grade < MIN_GRADE) {
    throw new Error(`Grade cannot be under ${MIN_GRADE}`);
  }

  const student = new Student(name, roundToTwoDecimals(grade), StudentStatus.ACTIVE);
  return saveStudentToSalesforce(student);
}

module.exports = { createStudent };
