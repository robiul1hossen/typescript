{
  // Union and Intersection types
  //
  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  //   type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";
  //   type Developer = FrontendDeveloper | FullStackDeveloper;
  //   const dev1: Developer = "expertDeveloper";
  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  //   type User = {
  //     name: string;
  //     age: number;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "A" | "B" | "AB" | "O";
  //   };
  //   const user1: User = {
  //     name: "robi",
  //     age: 25,
  //     gender: "male",
  //     bloodGroup: "O",
  //   };
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper | BackendDeveloper;
  const user1: FullStackDeveloper = {
    skills: ["html", "css", "js", "react", "express", "node", "mongodb"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
  //
}
