'use strict';

//Encapsulation through naming convension _
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected Property
    this._pin = pin;
    this._movements = [];
    // this.local = navigator.language; //-->work in browser
    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public interface of our object
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  //Protecte Method
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
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

console.log(acc1.getMovements()); //[ 250, -140, 1000 ]

//Encapsulation through class fields and #

// 1. Public field
// 2. Private field
// 3. Public Method
// 4. private Method

class Account1 {
  //public field (instance filed)
  owner;
  currency;
  //private field (instance filed)
  #pin;
  #movements = [];
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  //public method
  //Public interface of our object
  getMovements() {
    return this.#movements;
  }

  getPin() {
    return this.#pin;
  }
  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  //private Method
  #approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
    }
  }
}

const yashwant = new Account1('Yashwant', 'USD', 2222);
console.log(yashwant); //Account1 { owner: 'Yashwant', currency: 'USD' }
console.log(yashwant.getPin()); //2222
// console.log(yashwant.#pin); //SyntaxError: Private field '#pin' must be declared in an enclosing class

// yashwant.#approveLoan(); //SyntaxError: Private field '#approveLoan' must be declared in an enclosing class
yashwant.requestLoan(10000);
console.log(yashwant.getMovements());
