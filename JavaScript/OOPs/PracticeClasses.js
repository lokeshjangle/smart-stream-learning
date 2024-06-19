'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    // this.local = navigator.language; //-->work in browser
    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public interface of our object
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
    }
  }
}

const acc1 = new Account('Lokesh', 'EUR', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);

acc1.requestLoan(1000);
console.log(acc1);
