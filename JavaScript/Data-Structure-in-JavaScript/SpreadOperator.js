'use strict';
// spread operator doing the concat job
let arr = [1, 2, 3];
let arr2 = [4, 5];

arr = [...arr, ...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(...arr); //1 2 3 4 5
