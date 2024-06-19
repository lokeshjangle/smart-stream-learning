'use strict';

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const lokesh = Object.create(PersonProto);
console.log(lokesh.__proto__); //{ calcAge: [Function: calcAge] }

lokesh.name = 'Lokesh';
lokesh.birthYear = 2002;
lokesh.calcAge(); //22

console.log(lokesh.__proto__ === PersonProto); //true

const yashwant = Object.create(PersonProto);
yashwant.init('Yashwant', 1997);
console.log(yashwant);
yashwant.calcAge();
