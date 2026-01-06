{
  //   spread operator
  const friend1: string[] = ["mr.a", "mr.b", "mr.c"];
  const friend2: string[] = ["mr.x", "mr.y", "mr.z"];
  //   const friends: string[] = [""];
  friend1.push(...friend2);

  const mentors1: {
    typescript: string;
    next: string;
    dbms: string;
  } = {
    typescript: "mizba",
    next: "tonmoy",
    dbms: "mizsn",
  };
  const mentors2: {
    redux: string;
    cloud: string;
    prisma: string;
  } = {
    redux: "mir",
    cloud: "hafiz",
    prisma: "nahid",
  };
  const mentorList: {
    redux: string;
    cloud: string;
    prisma: string;
    typescript: string;
    next: string;
    dbms: string;
  } = {
    ...mentors1,
    ...mentors2,
  };
  console.log(mentorList);

  // rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string): string => `Hi ${friend}`);
  };

  greetFriends("Taniz", "Saimon", "Nuruddin", "Ismail");
  // destructure
}
