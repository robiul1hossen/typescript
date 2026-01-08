{
  //

  // function with generic
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = createArray("hello");
  const result2 = createArrayWithGeneric<string>("bangladesh");
  const result3 = createArrayWithGeneric<{ id: number; name: string }>({
    id: 11,
    name: "monica",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result4 = createArrayWithTuple<string, number>("bangladesh", 13);
  const result5 = createArrayWithTuple<string, { name: string }>("bd", {
    name: "asia",
  });

  const addCourse = <T>(student: T) => {
    const course = "next level web development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourse<{ name: string; id: number }>({
    name: "robi",
    id: 55,
  });
  type Student2 = { name: string; id: number; email: string };
  const student2 = addCourse<Student2>({
    name: "robi",
    id: 55,
    email: "robi@gmail.com",
  });

  //
}
