const SALESFORCE_URL = "https://salesforce.com/test";

async function createStudent(student) {
    try {
      const response = await fetch(SALESFORCE_URL, {
        method: "POST",
        headers: { Authorization: `Bearer ${student.token}` },
        body: JSON.stringify({ name: student.name, grade: student.grade }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to save student");
      }
  
      console.log("Student created successfully");
      return response.json();
    } catch (error) {
      console.error("Failed to create student", { studentId: student.id, cause: error });
      throw error;
    }
  }
