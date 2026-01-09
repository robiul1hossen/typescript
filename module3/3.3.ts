{
  //

  // type guard using typeof operator
  type Alphanumeric = string | number;
  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add("2", 3);
  //   console.log(result);

  // type guard using in operator

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: string;
  };

  const getUSer = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "mr.X",
  };
  const adminUser: AdminUser = {
    name: "mr.Y",
    role: "admin",
  };
  getUSer(adminUser);

  //
}
