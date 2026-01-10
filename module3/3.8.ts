{
  //
  // Polymorphism
  class Person {
    getSleep() {
      console.log("i am sleeping for 8 hours");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("i am sleeping for 7 hours");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("i am sleeping for 6 hours");
    }
  }

  const getSleepingHours = (params: Person) => {
    params.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();
  getSleepingHours(person3);

  class Area {
    getArea(): number {
      return 0;
    }
  }
  class Circle extends Area {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Area {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const circle = new Circle(1);
  const rectangle = new Rectangle(10, 10);
  console.log(rectangle.getArea());

  //
}
