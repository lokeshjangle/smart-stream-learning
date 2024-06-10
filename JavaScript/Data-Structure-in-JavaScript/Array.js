'use strict';
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Destructuring of array
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c); //a=1,b=2,c=3

const [x, y, z] = arr;
console.log(x, y, z); //x=1,b=2,c=3

//If we want to add third value of array to second element we just below syntax just pass nothing and separte it by comma
let [first, , second] = restaurant.categories;
console.log(first, second); //O/P: Italian Vegetarian

//If we want to switch variable/swap the variable  in array then we could do like this
/*
let temp = first;
first = second;
second = temp;
console.log(first, second); //Vegetarian Italian
*/

//But we can also do this
[first, second] = [second, first]; //--> Swapping without third variable
console.log(first, second); //o/p: Vegetarian Italian

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //Garlic Bread Pizza

//Destructuring nested array
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); //2,5,6

//Default value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8,9,1

/*Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584. */
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

//Swapping value of 2 variable using array destruturing
let o = 12;
let m = 13;
[m, o] = [o, m];
console.log(o, m);
