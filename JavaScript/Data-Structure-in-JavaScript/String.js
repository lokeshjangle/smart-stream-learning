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

//Change to lowecase and uppercase
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//trim() methods -->Remove spaces from start and end of string
const str = ' Lokesh Jangale ';
console.log(str.trim());
console.log(str.trimStart() + 'k'); //Remove spaces from start
console.log(str.trimEnd()); //Remove spaces form end

//Replace method to replace character/word in string
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const annoucement =
  'All passengers come to boarding door 23, Boarding door 23!';
console.log(annoucement.replace('door', 'gate')); //It will not replace all occurance of door in string it only replace first occurance to replace all occurance we need replace with regular expression
console.log(annoucement.replace(/door/g, 'gate')); //it replace all the occurrace where 'g' stands for global

//inclue() method: checking given string present in original string or not. It will return true and false
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); //true
console.log(plane.includes('Being')); //false

//.startsWith() --> check given string start with given parameter or not
//.endsWith() --> check given string end with given parameter or not
console.log(plane.startsWith('Air')); //true
console.log(plane.endsWith('neo')); //true

//practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome abroad!');
  }
};

checkBaggage('I have a laptop,some food and a packet of Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//Split() --> Divide a string in multiple part from given character and store in array
console.log('a+very+nice+string'.split('+')); //[ 'a', 'very', 'nice', 'string' ]
console.log('Lokesh Jangale'.split(' ')); //[ 'Lokesh', 'Jangale' ]
const [firstName, lastName] = 'Lokesh Jangale'.split(' ');
console.log(firstName, lastName);

//Join() --> Compress multiple string in single string
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //Mr. Lokesh JANGALE

//Capitalization of word
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('lokesh jangale');

//convert string into CamelCase
const camelCase = function (name) {
  const names = name.split(' ');
  const firstWord = names[0].toLowerCase();
  const camelCase = [firstWord];
  names.shift(); //remove first element from aray
  for (const n of names) {
    camelCase.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(camelCase.join(''));
};
camelCase('Lokesh jangale');

//Padding a string
const message = 'Go to gae 23!';
console.log(message.padStart(25, '+'));
console.log(message.padEnd(25, '+'));

//repeat() --> Repeat given string
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5)); //Return string 5 time with concatenate with each other.

//String Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
// console.log(flights.split('+'));

const getcode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  // console.log(type, from, to, time);
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getcode(from)} to ${getcode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}
