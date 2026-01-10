{
  //
  // Abstraction
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("i am starting the engine");
    }
    stopEngine(): void {
      console.log("i am stopping the engine");
    }
    move(): void {
      console.log("i am moving");
    }
  }

  const toyota = new Car1();
  //   toyota.startEngine();

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("testing");
    }
  }

  class HondaCar extends Car2 {
    startEngine(): void {
      console.log("start");
    }
    stopEngine(): void {
      console.log("stop");
    }
    move(): void {
      console.log("move");
    }
  }

  const hondaCar = new HondaCar();
  hondaCar.startEngine();
  const test = new HondaCar();
  test.test();
  //
}
