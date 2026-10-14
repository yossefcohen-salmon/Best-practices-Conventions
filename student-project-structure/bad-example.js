class Student {
  constructor(name, grade, status) {
    this.name = name;
    this.grade = grade;
    this.status = status;
  }
}

async function createStudent(name, grade) {
  if (grade < 0) throw new Error("Grade cannot be under 0");

  const student = new Student(name, Math.round(grade * 100) / 100, "ACTIVE");
  const res = await fetch("https://salesforce.com/test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return res.json();
}
