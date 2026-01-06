{
  //
  // use of question mark(?)
  // ternary operator | optional chaining | nullish coalescing operator
  const age: number = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
  //   ternary operator
  const result = age >= 18 ? "adult" : "not adult";
  //   console.log({ result });

  //   nullish coalescing operator
  //   making a decision depending on value null and undefine
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";

  //   console.log({ result1 }, { result2 });

  //   optional chaining & nullish coalescing
  type User = {
    name: string;
    age: number;
    address: {
      city: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };
  const user1: User = {
    name: "robi",
    age: 25,
    address: {
      city: "ctg",
      presentAddress: "ftc",
    },
  };
  const permanentAddress =
    user1?.address?.permanentAddress ?? "NO Permanent Address";
  console.log({ permanentAddress });
  //
}
