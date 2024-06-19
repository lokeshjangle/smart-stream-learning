'use strict';

//function experssion
const Person = class {
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

  //Static method declareation in ES6 class
  static hey() {
    console.log('Hey there 👋`'); //Hey there 👋
  }
};
const lokesh = new Person('Lokesh Jangale', 2002);

// //Static method declaration in constructor function
// Person.hey = function () {
//   console.log('Hey there 👋');
// };
lokesh.calcAge();
// lokesh.hey(); //Hey there 👋
// lokesh.hey(); //TypeError: lokesh.hey is not a function
