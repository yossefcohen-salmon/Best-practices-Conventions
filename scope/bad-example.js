// ❌ Bad example
function printStudentsBad(students) {
    let fullName;
    let isPassed;
  
    for (const student of students) {
      fullName = `${student.firstName} ${student.lastName}`;
      isPassed = student.grade >= 60;
      console.log(fullName, isPassed);
    }
  
    students.forEach((student) => {
      fullName = `${student.firstName} ${student.lastName}`;
      console.log(fullName);
    });
  }
  