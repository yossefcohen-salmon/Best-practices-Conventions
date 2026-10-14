const SALESFORCE_URL = "https://salesforce.com/test";

async function createStudent(name, grade) {
  try {
    const response = await fetch(SALESFORCE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, grade }),
    });

    if (!response.ok) {
      throw new Error("Failed to save student");
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to create student", { cause: error });
  }
}
