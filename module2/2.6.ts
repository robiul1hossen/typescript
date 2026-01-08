{
  //
  // Constraints in typescript

  const addCourse = <T extends { name: string; id: number; email: string }>(
    student: T
  ) => {
    const course = "next level web development";
    return {
      ...student,
      course,
    };
  };

  type Student1 = {
    name: string;
    id: number;
    email: string;
    isMarried: boolean;
  };
  const student1 = addCourse<Student1>({
    name: "robi",
    id: 55,
    email: "robi@gmail.com",
    isMarried: false,
  });
  type Student2 = { name: string; id: number; email: string; devType: string };
  const student2 = addCourse<Student2>({
    name: "habi",
    id: 15,
    email: "habi@gmail.com",
    devType: "frontend dev",
  });
  const student3 = addCourse({
    name: "jabi",
    id: 21,
    email: "jabi@email.com",
    emni: "emni",
  });
  //
}
