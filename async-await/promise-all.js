const SALESFORCE_URL = "https://salesforce.com/test";

async function getStudent(studentId) {
  const response = await fetch(`${SALESFORCE_URL}/students/${studentId}`);

  if (!response.ok) {
    throw new Error(`Failed to get student ${studentId}`);
  }

  return response.json();
}

async function getStudents(studentIds) {
  try {
    const students = await Promise.all(
      studentIds.map((studentId) => getStudent(studentId))
    );
    return students;
  } catch (error) {
    throw new Error("Failed to get students", { cause: error });
  }
}

module.exports = { getStudents };
