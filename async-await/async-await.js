const SALESFORCE_URL = "https://salesforce.com/test";

async function getStudentWithGrades(studentId) {
  const studentResponse = await fetch(`${SALESFORCE_URL}/students/${studentId}`);
  const student = await studentResponse.json();

  const gradesResponse = await fetch(`${SALESFORCE_URL}/students/${student.id}/grades`);
  const grades = await gradesResponse.json();

  return { ...student, grades };
}

module.exports = { getStudentWithGrades };
