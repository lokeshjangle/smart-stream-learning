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
    sal: {
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

//Passing object to function and function take input in destructured way
restaurant.orderDelivery({
  time: '22:30',
  address: 'Mumbai',
  mainIndex: 2,
  starterIndex: 2,
}); //Order received! Garlic Bread and Risotto will be delivered to Mumbai at 22:30

//Destructuring the object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//if we want to give our personal name to that property we use property:variable_name
const {
  name: restaurantName, //Classico Italiano
  openingHours: hours, //{thu: { open: 12, close: 22 },    fri: { open: 11, close: 23 },    sal: { open: 0, close: 24 }  }
  categories: tags, // [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]
} = restaurant;
console.log(restaurantName, hours, tags);

//To give default value to variable
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); //[] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); //a=23,b=7

//Nested Objects
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close); //11 23

const { fri } = restaurant.openingHours;
console.log(fri); //{ open: 11, close: 23 }
