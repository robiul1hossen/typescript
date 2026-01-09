{
  //Inheritance in OOP.

  //   class Student {
  //     name: string;
  //     age: number;
  //     address: string;

  //     constructor(name: string, age: number, address: string) {
  //       this.name = name;
  //       this.age = age;
  //       this.address = address;
  //     }

  //     getSleep(numOfHrs: number) {
  //       console.log(`${this.name} will sleep for ${numOfHrs} hours`);
  //     }
  //   }

  //   const student = new Student("Anfa", 12, "ctg");
  //   student.getSleep(8);

  //   class Teacher {
  //     name: string;
  //     age: number;
  //     address: string;
  //     designation: string;

  //     constructor(
  //       name: string,
  //       age: number,
  //       address: string,
  //       designation: string
  //     ) {
  //       this.name = name;
  //       this.age = age;
  //       this.address = address;
  //       this.designation = designation;
  //     }

  //     getSleep(numOfHrs: number) {
  //       console.log(`${this.name} will sleep for ${numOfHrs} hours`);
  //     }
  //     takeClass(numOfHrs: number) {
  //       console.log(`${this.name} will take class for ${numOfHrs} hours`);
  //     }
  //   }

  //   const teacher = new Teacher("mr.x", 40, "ctg", "professor");
  //   teacher.takeClass(5);

  class Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    getSleep(numOfHrs: number) {
      console.log(`${this.name} will sleep for ${numOfHrs} hours`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfHrs: number) {
      console.log(`${this.name} will take class for ${numOfHrs} hours`);
    }
  }

  const student = new Student("mr.x", 20, "ctg");
  console.log(student.address);
  const teacher = new Teacher("mr.y", 40, "dhk", "professor");
  teacher.takeClass(4);

  //
}
