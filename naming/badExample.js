const max_students = 30;

class student_list {
  constructor() {
    this.StudentArray = [];
  }

  Add_Student(Student_Name) {
    if (this.StudentArray.length >= max_students) {
      return false;
    }
    this.StudentArray.push(Student_Name);
    return true;
  }
}
