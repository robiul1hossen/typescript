{
  //

  // generic with interface

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  const user1: Developer<{ brand: string; model: string }> = {
    name: "robi",
    computer: {
      brand: "hp",
      model: "g-5",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "wew",
      model: "k2e6",
    },
  };
  const user2: Developer<{
    brand: string;
    model: string;
    sleepTrack: boolean;
    heartTrack: boolean;
  }> = {
    name: "nabi",
    computer: {
      brand: "apple",
      model: "m1",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "apple watch",
      model: "k256",
      heartTrack: true,
      sleepTrack: true,
    },
  };

  //
}
