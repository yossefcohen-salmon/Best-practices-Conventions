const SALESFORCE_URL = "https://salesforce.com/test";

// ❌ Bad example
async function createStudentBad(student) {
  console.log("starting to create student");
  console.log(student);

  const response = await fetch(SALESFORCE_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${student.token}` },
    body: JSON.stringify(student),
  });

  console.log(response);
  console.log(`student ${student.name} created successfully`);
  return response.json();
}
