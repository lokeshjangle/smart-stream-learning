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

// spread operator doing the concat job
let arr = [1, 2, 3];
let arr2 = [4, 5];

arr = [...arr, ...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(...arr); //1 2 3 4 5

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const joinArray = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinArray);

//working with string
const str = 'Lokesh';
const letter = [...str, ' ', 'J.'];
console.log(letter); //['L', 'o',  'k','e', 's',  'h',' ', 'J.' ]
// console.log(`${...str}`);

//Working with function
function display(name1, name2, name3) {
  console.log(name1, name2, name3);
}
const nameArr = ['lokesh', 'Yashwant', 'Vikram'];
display(...nameArr); //lokesh Yashwant Vikram

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Lokesh' };
console.log(newRestaurant);

//Shallow copy of object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); //Ristorante Roma
console.log(restaurant.name); //Classico Italiano
