import { useState } from "react";
import { createStudentController } from "../controllers/student.controller";

export function StudentsComponent() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState(0);
  const [error, setError] = useState("");

  async function handleSubmit() {
    try {
      await createStudentController(name, grade);
      setError("");
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" value={grade} onChange={(e) => setGrade(Number(e.target.value))} />
      <button onClick={handleSubmit}>Create student</button>
      {error && <p>{error}</p>}
    </div>
  );
}
