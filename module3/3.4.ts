{
  //
  // instanceof guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making Sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMew() {
      console.log("I am mewing");
    }
  }

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const getSound = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };

  const cat = new Cat("Persian", "cat");
  const dog = new Dog("German Shaperd", "dog");
  getSound(dog);

  //
}
