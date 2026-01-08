{
  //
  // Constraints using keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner1 = "bike" | "car" | "ship";
  type Owner2 = keyof Vehicle;

  const person: Owner2 = "car";

  const getPropertyValue = <T, Q extends keyof T>(obj: T, key: Q) => {
    return obj[key];
  };

  const user1 = {
    name: "robi",
    age: 25,
    email: "robi@mail.com",
  };
  getPropertyValue(user1, "age");
  //
}
