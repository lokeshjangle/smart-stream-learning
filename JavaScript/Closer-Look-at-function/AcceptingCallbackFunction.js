'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-Order function
const transformer = function (str, fn) {
  //-->Higher order function
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`); //-->First-class function

  console.log(`Transformed by: ${fn.name}`); // function contains '.name' property which return a name of function
};

transformer('JavaScript is the best!', upperFirstWord); //--> Passing callback function as a arguments

transformer('JavaScript is the best!', oneWord);

//Function which return another function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey,');
console.log(greeterHey); //[Function (anonymous)]
greeterHey('Lokesh'); //Hey, Lokesh

greet('Hello')('Yeshwant'); //Hello, Yeshwant
