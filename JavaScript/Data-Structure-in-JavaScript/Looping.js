'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
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
  },
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
