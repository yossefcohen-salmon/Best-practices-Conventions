const SALESFORCE_URL = "https://salesforce.com/test";

function roundToTwoDecimals(grade) {
  return Math.round(grade * 100) / 100;
}

async function createStudent(student) {
  const grade = roundToTwoDecimals(student.grade);

  const response = await fetch(SALESFORCE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: student.name, grade }),
  });

  if (!response.ok) {
    throw new Error("Failed to save student");
  }

  return response.json();
}

module.exports = { createStudent };
