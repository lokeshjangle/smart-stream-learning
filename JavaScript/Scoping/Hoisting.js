'use strict'

// const myName = "lokesh";

// if (myName) {
//     console.log(`${myName} is a ${job}`);
//     const age = 2024 - 2002;
//     console.log(age);
//     let job = "JSE";
//     // console.log(x);
// }


//=====Hoisting for variables=============
// console.log(myName);  //undefined
// console.log(age);     //ReferenceError: Cannot access 'age' before initialization
// console.log(gender);  //ReferenceError: Cannot access 'gender' before initialization

// var myName = "lokesh";
// let age = 23;
// const gender = "Male";


//=====Hoisting for Function===============
// console.log(addDecl(2, 3)); //5
// console.log(addExpr(2, 3)); //TypeError: addExpr is not a function
// console.log(addArrow(2, 3)); //ReferenceError: Cannot access 'addArrow' before initialization

// function addDecl(a, b) { return a + b; }

// var addExpr = function (a, b) { return a + b; }

// const addArrow = (a, b) => a + b;


// const x = 2;
// {
//     console.log(x);  //ReferenceError: Cannot access 'x' before initialization
//     let x = 3;

// }

