// ✅ Good example
function printStudents(students) {
    for (const student of students) {
      const fullName = `${student.firstName} ${student.lastName}`;
      const isPassed = student.grade >= 60;
      console.log(fullName, isPassed);
    }
  
    students.forEach((student) => {
      const fullName = `${student.firstName} ${student.lastName}`;
      console.log(fullName);
    });
  }
  