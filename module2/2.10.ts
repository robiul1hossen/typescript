{
  //

  //   converting the array from number to string using js map
  const arrNumbers: number[] = [1, 2, 3, 4];
  const arrStrings = arrNumbers.map((num: number): string => num.toString());
  console.log(arrStrings);

  //   converting type using typescript mapped method
  type AreaNum = {
    height: number;
    width: number;
  };

  type AreaString<T> = {
    [index in keyof T]: T[index];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
  //
}
