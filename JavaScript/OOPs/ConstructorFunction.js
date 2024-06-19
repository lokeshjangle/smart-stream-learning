'use strict';

//Constructor function
const Person = function (firstName, birthYear) {
  console.log(this); //Person {}
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log(this); //Person { firstName: 'Lokesh', birthYear: 2001 }

  //Adding method --> you should never create method in constructor function. because every constructor call new copy will be created
  //   this.calcAge = function () {
  //     console.log(2024 - this.birthYear);
  //   };
};
const lokesh = new Person('Lokesh', 2001);
console.log(lokesh); //Person { firstName: 'Lokesh', birthYear: 2001 }
lokesh.lastName = 'Jangale';
console.log(lokesh); //Person { firstName: 'Lokesh', birthYear: 2001, lastName: 'Jangale' }

const yashwant = new Person('Yashwant', 1997);
console.log(yashwant);
console.log(Person.length); //2

//instansof --> to check instanceOf prototype
console.log(lokesh instanceof Person); //true

//Prototypal inheritance
//Adding method through prototype property
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
console.log(lokesh); //Person { firstName: 'Lokesh', birthYear: 2001, lastName: 'Jangale' } --> not creating copy of calcAge function.
lokesh.calcAge(); //23
yashwant.calcAge(); //27

console.log(lokesh.__proto__); //{ calcAge: [Function (anonymous)] }
console.log(lokesh.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(lokesh)); //true

//set property using prototype
Person.prototype.species = 'Home Sapiens';
console.log(lokesh.species, yashwant.species);

//checking owning property
console.log(lokesh.hasOwnProperty('firstName')); //true
console.log(lokesh.hasOwnProperty('species')); //false

console.log(lokesh.hasOwnProperty('lastName')); //true
console.log(yashwant.hasOwnProperty('lastName')); //false
console.log(lokesh.__proto__.__proto__.__proto__); //null

console.log(Person.prototype.constructor); //[Function: Person]

const house = {
  color: 'brown',
  size: 'huge',
};

console.log(house.prototype); //undefined

const arr = [3, 4, 5, 6, 2, 6, 5, 8];
console.log(arr.__proto__);

//Add property in built in object
//But don't do this its a bad practice
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
