{
  //
  // utility types

  //   pic type
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //Omit type
  type ContactInfo = Omit<Person, "name" | "age">;

  //   required type
  type PersonRequired = Required<Person>;

  // readonly type
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "mr.x",
    age: 25,
    contactNo: "015",
    email: "ro@bi.com",
  };
  //   person1.age = 25;

  const emptyObj: Record<string, unknown> = {};

  type MyObj = Record<string, string>;
  const ojb1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };
}
