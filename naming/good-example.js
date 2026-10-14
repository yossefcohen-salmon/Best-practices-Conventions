const MAX_STUDENTS = 30;

class StudentList {
  constructor() {
    this.students = [];
  }

  addStudent(studentName) {
    if (this.students.length >= MAX_STUDENTS) {
      return false;
    }
    this.students.push(studentName);
    return true;
  }
}
