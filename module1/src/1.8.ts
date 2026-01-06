{
  // destructure
  const user = {
    id: 121,
    age: 25,
    contactNo: "01537436599",
    name: {
      firstName: "Mohammad",
      middleName: "Robiul",
      lastName: "Hossen",
    },
  };

  const {
    contactNo,
    name: { middleName },
  } = user;

  const friends = [
    "Taniz",
    "Saimon",
    "Nuruddin",
    "Ismail",
    "Rakib",
    "Emaon",
    "Raihan",
  ];
  const [, , bestFriend, ...frnds] = friends;
}
