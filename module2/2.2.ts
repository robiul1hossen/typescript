{
  //

  // type vs interface
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User2 & { role: string };
  interface UserWithRole2 extends User1 {
    role: string;
  }

  const user1: User2 = {
    name: "robi",
    age: 25,
  };

  const user2: UserWithRole2 = {
    name: "robi",
    age: 25,
    role: "developer",
  };

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }
  const roll1: Roll2 = [4, 6, 9];

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
