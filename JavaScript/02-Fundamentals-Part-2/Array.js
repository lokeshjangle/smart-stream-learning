'use strict'
const friends = ['Lokesh', 2001, 'Yeshwant', 'Vishal'];
console.log(friends);

//Another way to declare array by using new keyword
const year = new Array(2001, 2002, 2003, 2004);
console.log(year);

//Find the length of array
console.log(friends.length);

//Find the last element of array
console.log(friends[friends.length - 1]);

//Change the last element of array
friends[friends.length - 1] = 'Karan';
console.log(friends);

friends[1] = 'Vikram'; //allowed
console.log(friends);
// friends = ["Lukky"]  //not allowed

//create array with variable and another array
const firstName = 'Lokesh';
const lokesh = [firstName, 'Jangale', friends];
console.log(lokesh);

//Different array method
const demo = friends;
console.log(demo);
console.log(demo.length); //return size of array
demo.push('Lukky'); //Add element to the end of array
console.log(demo);
demo.unshift('Vishal'); //Add element to start of array
console.log(demo);

demo.pop(); //Remove last element
console.log(demo);
demo.shift(); //Remove first element
console.log(demo);

console.log(demo.indexOf('Vikram')); //Return the index of element or return -1

console.log(demo.includes('Karan')); //It check element present in array or not. return true if present or false and it test element through strict equality i.e. it can check type of element.
console.log([1, 2, 3, 11, 333, 2222].sort((a, b) => a - b));
