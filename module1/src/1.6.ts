// function in ts

// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(5, 4);

// arrow function
const addArrowFunc = (num1: number, num2: number): number => num1 + num2;
addArrowFunc(1, 8);

// function in object => method
const user1 = {
  name: "Robi",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};
const user2 = {
  name: "Habi",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [4, 5, 6];
const newArr: number[] = arr.map((elm: number): number => elm * elm);
