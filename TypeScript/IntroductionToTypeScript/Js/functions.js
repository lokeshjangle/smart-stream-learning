"use strict";
//functions with different return types
//number/string....etc return type
function add(n1, n2) {
    return n1 + n2;
}
//void return type
function printResult(num) {
    console.log('Result: ' + num); //30
}
//undefined return type
function demo() {
    return;
}
function demo1() {
    return;
}
printResult(add(10, 20));
console.log(demo()); //undefined
console.log(demo1()); //undefined
//Function as a type
// let combineValues;
// combineValues = add;
// console.log(combineValues(7, 4)); //11
// combineValues = 5;
// console.log(combineValues); //5--> faulty value
let combineValues;
combineValues = add;
console.log(combineValues(7, 4));
// combineValues = printResult; //Error: Type '(num: number) => void' is not assignable to type
//Callback function
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(12, 8, result => {
    console.log(result); //20
});
