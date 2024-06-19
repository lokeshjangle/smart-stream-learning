'use strict';

//Class expression
// const Person = class{}

//Class declaration
class Person {
  constructor(fullName, birthYear) {
    console.log(this); //Person {}
    this.fullName = fullName;
    this.birthYear = birthYear;
    console.log(this); //Person { fullName: 'Lokesh', birthYear: 2002 }
  }
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else console.error(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}
const lokesh = new Person('Lokesh Jangale', 2002);
console.log(lokesh); //Person { fullName: 'Lokesh', birthYear: 2002 }
lokesh.calcAge(); //22

console.log(lokesh.__proto__ === Person.prototype); //true

//add method in prototype
Person.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};

lokesh.greet(); //Hey Lokesh
console.log(lokesh.age); //23
lokesh.fullName = 'Lokesh Pramod Jangale';
console.log(lokesh.fullName);
