{
  //
  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Robi",
    age: 25,
    contactNo: "01537436599",
    address: "ctg",
  };
  const student2: Student = {
    name: "Taniz",
    age: 25,
    address: "ctg",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Robi";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
  //
}
