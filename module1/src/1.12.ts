{
  //

  //   nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching...");
    } else {
      console.log("nothing to search");
    }
  };
  searchName(null);

  const getSpeedInKiloMiterPerHour = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`the converted spdde is ${convertedSpeed} m/s`);
    } else if (typeof value === "string") {
      const getSpeed = value.split(" ")[0];
      const speedInNumber = parseFloat(getSpeed);
      const convertedSpeed = (speedInNumber * 1000) / 3600;
      console.log(`the converted spdde is ${convertedSpeed} m/s`);
    } else {
      console.log("enter a valid input");
    }
  };
  getSpeedInKiloMiterPerHour("1000 km/h");
  getSpeedInKiloMiterPerHour(1000);
  getSpeedInKiloMiterPerHour(false);

  //Never Type
  const throwError = (message: string) => {
    throw new Error(message);
  };
  throwError("error created by developer");
  //
}
