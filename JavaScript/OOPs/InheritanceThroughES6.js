'use strict';

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

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  //This method is override over Parent method
  calcAge() {
    console.log(
      `I'm ${
        2024 - this.birthYear
      } years ole, but as a student I feel more like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}

// const lokesh = new Student('Lokesh Jangale', 2002);
const lokesh = new Student('Lokesh Jangale', 2002, 'Computer Science');
console.log(lokesh);
lokesh.introduce();
lokesh.calcAge(); //I'm 22 years ole, but as a student I feel more like 32
