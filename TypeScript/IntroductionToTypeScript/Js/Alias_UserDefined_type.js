"use strict";
let currentStatus;
currentStatus = 'pending'; //"pending"
currentStatus = 'approved'; //'approved'
currentStatus = 'rejected'; //'rejected'
// const u1: User = { name: 'Max', age: 30 }; // this works!
// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
//   }
//   function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
//   }
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
