'use strict';

//Short circuiting
/*
    - There are 3 different properties of logical operator
     1. It use ANY Data Type
     2. It return ANY Data type
     3. Short-circuiting

*/

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

console.log(3 || 'lokesh'); //3
console.log('' || 'Lokesh'); //Lokesh
console.log(true || 0); //true
console.log(undefined || null); //null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello

//return default value if no value present in object using ternary and short-cirtuit
//using ternary operator
restaurant.newGuest = 100;
const guest1 = restaurant.newGuest ? restaurant.newGuest : 10;
console.log(guest1); //10 --> if no value present then it return 10 otherwise return value of restaurant.newGuest

//using short-circuting
const guest2 = restaurant.newGuest || 20;
console.log(guest2);
