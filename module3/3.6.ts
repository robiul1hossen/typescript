{
  //

  // getter & setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    set deposit(balance: number) {
      this._balance = this._balance + balance;
    }
    get balance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const gorib = new BankAccount(12, "mr.gorib", 250);
  gorib.deposit = 50;
  const res1 = gorib.balance;
  console.log(res1);

  //
}
