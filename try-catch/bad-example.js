function createStudent(name, grade) {
  try {
    if (grade < 0) {
      throw new Error("Grade cannot be under 0");
    }
    return { name, grade, status: "ACTIVE" };
  } catch (error) {
    console.log(error);
  }
}
