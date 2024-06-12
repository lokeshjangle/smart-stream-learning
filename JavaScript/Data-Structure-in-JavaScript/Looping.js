'use strict';
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//For-of loop
console.log('========FOR-OF LOOP=============');
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

//If we want to print item with index value use .entries() method
console.log('-------Array.entries() method--------');
for (const item of menu.entries()) {
  console.log(item);
}
//Print value with index using array indexing
console.log('-------Array indexing------------');
for (const item of menu.entries()) {
  console.log(`${item[0]}: ${item[1]}`);
}

//Print value with index using array destructuring
console.log('-------Array Destructuring----------');
for (const [i, item] of menu.entries()) {
  console.log(`${i}: ${item}`);
}

console.log('-------Looping over object----------------');
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// } //array of keys

const properties = Object.keys(openingHours); //To find keys of object
console.log(properties); //[ 'thu', 'fri', 'sat' ]
// console.log(`We are open on ${properties.length} days`);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day} `;
}

console.log(openStr);

//To find values of keys in object
const value = Object.values(openingHours);
console.log(value);

//use of .entries() function to print element with key and value
const entries = Object.entries(restaurant);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open ate ${open} and close at ${close}`);
}
