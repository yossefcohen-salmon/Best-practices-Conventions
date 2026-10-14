const SALESFORCE_URL = "https://salesforce.com/test";

async function createStudent(firstName, lastName, grade, email, phone, token, address, status) {
  if (!firstName || !lastName) {
    throw new Error("Name is required");
  }

  if (grade < 0) {
    throw new Error("Grade cannot be under 0");
  }

  const fullName = `${firstName.trim()} ${lastName.trim()}`;
  const roundedGrade = Math.round(grade * 100) / 100;

  console.log("creating student", fullName, email, phone, token);

  const response = await fetch(SALESFORCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: fullName, grade: roundedGrade, email, phone, address, status }),
  });

  if (!response.ok) {
    throw new Error("Failed to save student");
  }

  await fetch("https://mail.com/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to: email, subject: "Welcome", body: `Hello ${fullName}` }),
  });

  return response.json();
}
