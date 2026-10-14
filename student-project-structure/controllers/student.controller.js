const { createStudent } = require("../service/student-service");

function createStudentController(name, grade) {
  return createStudent(name, grade);
}

module.exports = { createStudentController };
