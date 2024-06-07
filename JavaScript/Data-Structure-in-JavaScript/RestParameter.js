'use strice';
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
//SPREAD OPERATOR
const arr = [1, 2, ...[3, 4]];
console.log(arr); //[ 1, 2, 3, 4 ]

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 [ 3, 4, 5 ]

//Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//function
const display = function (...numbers) {
  console.log(numbers);
};
display(2, 3); //[2,3]
display(2, 3, 4, 5); //[2,3,4,5]

const x = [20, 2, 3, 4, 5, 6];
display(...x);
