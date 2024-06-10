'use strict';
const restaurantOldUi = {
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
console.log(
  '--------------------NEW UI-----------------------------------------------------'
);

const weekDays = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    //--->We can also pass expression as a property
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};
const restaurantNewUi = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours, //We can declare object outside the object and jus pass name of that object as a property name
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //We can also use modified version for function in object. Write function without using function keyword
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

console.log(restaurantNewUi);

//Optional Chaining
// console.log(restaurantNewUi.openingHours.mon.open); //TypeError: Cannot read properties of undefined (reading 'open')
console.log(restaurantNewUi.openingHours.mon?.open); //undefined

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurantNewUi.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day} we open at ${open}`);
}

//Optional chaining on methods checking method exist or not
console.log(restaurantNewUi.order?.(0, 1) ?? 'Method does not exists');
console.log(restaurantNewUi.orderRissoto?.(0, 1) ?? 'Method does not exists'); //undefined or 'Method not exist'

//Optional chaining with array
// const user = [{ name: 'Lokesh', email: 'lokesh@gmail.com' }];
const user = [];
console.log(user[0]?.name ?? 'User arry is Empty');
