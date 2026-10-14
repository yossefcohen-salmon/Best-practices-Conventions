async function saveStudentToSalesforce(student) {
  const response = await fetch(SALESFORCE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });

  if (!response.ok) {
    throw new Error("Failed to save student");
  }

  return response.json();
}

module.exports = { saveStudentToSalesforce };
