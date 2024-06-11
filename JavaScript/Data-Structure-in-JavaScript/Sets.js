'use strict';

const orderSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'pizza',
  'Pasta',
]);
console.log(orderSet); //Set(4) { 'Pizza', 'Pasta', 'Risotto', 'pizza' }

//Set with string iterable
console.log(new Set('Lokesh')); //Set(6) { 'L', 'o', 'k', 'e', 's', 'h' }

//length of set
console.log(orderSet.size); //4

//checking element present in the Set or not
//.has()  -->true/false
console.log(orderSet.has('Pizza')); //true
console.log(orderSet.has('Bread')); //false

//Add new element in set
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);

//Delete element from set
orderSet.delete('Risotto');
console.log(orderSet);

//Delete all element from set
// orderSet.clear();
// console.log(orderSet);

//Looping with set
for (const order of orderSet) console.log(order);

//Example for find unique element in array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);//Set(3) { 'Waiter', 'Chef', 'Manager' } --> This is giving unique value but in set format
const staffUnique = [...new Set(staff)]; //[ 'Waiter', 'Chef', 'Manager' ] --> This is giving unique value in array format
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

//Find the unique charater from string
console.log(new Set('Lokesh Jangale'));
console.log(new Set('Lokesh Jangale').size);
