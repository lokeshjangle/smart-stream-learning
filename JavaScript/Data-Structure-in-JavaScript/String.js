'use strict';

const airline = 'TAP Air Portugal';
const plan = 'A320';

console.log(plan[0]);
console.log(plan[1]);
console.log(plan[2]);
console.log('B339'[0]);

//To find length of string
console.log(airline.length); //16
console.log('B339'.length); //4

//indexOf() method -->find first found index of letter
console.log(airline.indexOf('r')); //6
console.log(airline.indexOf('Air')); //4
//lastIndexOf() method --> find last found index of letter
console.log(airline.lastIndexOf('r')); //10

//slice() method --> it extract string from given index
//It always return a new string which is substring of original string and slice() is not modify original string
console.log(airline.slice(4)); //Air Portugal

console.log(airline.slice(4, 7)); //Air--> start and end index

//Extract first and last word dynamically from string
console.log(airline.slice(0, airline.indexOf(' '))); //TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal

//use slice with negative value
console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //AP Air Portuga--> print remaining letter after removing 1 letter

const checkMiddelSeat = function (seat) {
  //B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat ');
  else console.log('You got lucky ');
};

checkMiddelSeat('11B');
checkMiddelSeat('23C');
checkMiddelSeat('3E');
