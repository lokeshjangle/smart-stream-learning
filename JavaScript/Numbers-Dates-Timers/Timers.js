'use strict';

setTimeout(() => console.log('Here is your Pizza 🍕'), 3000);
console.log('Waiting....');

//Passed arguments to setTimeout() function
setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  'olives',
  'spinach'
); //Here is your Pizza with olives and spinach 🍕
console.log('Waiting....');

//Break timeout function
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
); //Here is your Pizza with olives and spinach 🍕

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval() function
let time = 10;
setInterval(function () {
  //print time on console
  console.log(time);
  //stop timmer on 0
  if (time === 0) clearInterval(this);
  time--;
}, 1000);

//clock
let clockTime = 10;
setInterval(function () {
  const min = String(Math.trunc(clockTime / 60)).padStart(2, 0);
  const sec = String(Math.trunc(clockTime % 60)).padStart(2, 0);
  console.log(`${min}:${sec}`);
  //Stop Timmer on 0
  if (clockTime === 0) clearInterval(this);
  clockTime--;
}, 1000);

//Print interval after 3000 second
// setTimeout(function () {
//   setInterval(function () {
//     //print time on console
//     console.log(time);
//     //stop timmer on 0
//     if (time === 0) clearInterval(this);
//     time--;
//   }, 1000);
// }, 3000);
