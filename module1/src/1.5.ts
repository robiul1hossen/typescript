// Reference Type ==> Object

const user: {
  company: "Programming Hero"; // when a value use as a type is called literal type
  firstName: string;
  middleName?: string; // question mark(?) represents optional type
  lastName: string;
  readonly isDeveloper: boolean; //this is (readonly) a access modifier
} = {
  firstName: "Mohammad",
  middleName: "Robiul",
  lastName: "Hosseen",
  company: "Programming Hero",
  isDeveloper: true,
};
