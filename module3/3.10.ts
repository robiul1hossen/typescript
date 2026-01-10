{
  //

  // Encapsulation

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    addDeposit(amount: number) {
      return (this._balance = this._balance + amount);
    }

    private getBalance() {
      return this._balance;
    }
    getHiddenBalance() {
      //private property or method access by another method
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const gorib = new BankAccount(12, "mr.gorib", 25);
  const res = gorib.getHiddenBalance();
  console.log(res);

  //
}
