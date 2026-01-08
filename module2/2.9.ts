{
  //

  // conditional type
  type a = number;
  type b = string;

  type x = a extends null ? true : false;
  type y = b extends undefined ? true : a extends null ? null : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    tractor: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasTractor = CheckVehicle<"tractor">;

  //
}
