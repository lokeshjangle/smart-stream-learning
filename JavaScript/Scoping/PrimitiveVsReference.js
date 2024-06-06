'use strict'

let age = 20;
let oldAge = age;
age = 30;
oldAge = 24;
console.log(oldAge);
console.log(age);

const me = {
    firstName: "lokesh",
    age: 22
}

const friend = me;
me.age = 29;
console.log(me);
console.log(friend);