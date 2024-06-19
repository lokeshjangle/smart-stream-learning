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

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

//Student constructor function
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// lokesh.calcAge(); //lokesh.calcAge
//To link student prototype to person prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const lokesh = new Student('Lokesh', 2002, 'Computer Science');
lokesh.introduce();
lokesh.calcAge();

console.log(lokesh instanceof Student); //true
console.log(lokesh instanceof Person); //true
console.log(lokesh instanceof Object); //true

console.log(Student.prototype.constructor); //[Function: Person]
Student.prototype.constructor = Student;

console.log(Student.prototype.constructor); //[Function: Student]

lokesh.calcAge(); //22
