{
  //

  // generic type

  type GenericArray<T> = Array<T>;

  //   const roll: number[] = [2, 5, 8];
  //   const roll: Array<number> = [2, 5, 8];
  const roll: GenericArray<number> = [2, 5, 8];

  //   const names: string[] = ["X", "Y", "Z"];
  //   const names: Array<string> = ["X", "Y", "Z"];
  const names: GenericArray<string> = ["X", "Y", "Z"];

  //   const bool: boolean[] = [true, true, false];
  //   const bool: Array<boolean> = [true, true, false];
  const bool: GenericArray<boolean> = [true, true, false];

  type User = {
    name: string;
    age: number;
  };
  const user: GenericArray<User> = [
    {
      name: "robi",
      age: 25,
    },
    {
      name: "taniz",
      age: 25,
    },
  ];

  //   genetic tuple
  type GenericTuple<X, Y> = [X, Y];
  const person: GenericTuple<string, string> = ["Mr.X", "Mrs.X"];

  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    123,
    {
      name: "robi",
      email: "robiul99hossen@gmail.com",
    },
  ];

  //
}
