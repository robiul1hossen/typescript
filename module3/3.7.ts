{
  //
  // static
  class Count {
    static count: number = 0;

    increment() {
      return (Count.count = Count.count + 1);
    }
    static decrement() {
      return (Count.count = Count.count - 1);
    }
  }

  const instance1 = new Count();
  console.log(instance1.increment());
  console.log(instance1.increment());
  console.log(instance1.increment());
  const instance2 = new Count();
  console.log(instance2.increment());
  console.log(instance2.increment());
  console.log(instance2.increment());

  //   const instance3 = new Count();
  console.log(Count.decrement());

  //
}
