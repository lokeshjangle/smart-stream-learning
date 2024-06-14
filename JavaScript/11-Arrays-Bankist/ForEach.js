'use strict';

//Loop over an array using forEach() method;
const foreachArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
foreachArray.forEach(function (e) {
  console.log(e);
});

//forEach with index
foreachArray.forEach(function (element, index) {
  console.log(`${index}: ${element}`);
});

//ForEach on map
console.log('----- FOREACH WITH MAP -----');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

//ForEach with set
console.log('----- FOREACH WITH SET -----');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach(function (value) {
  console.log(value);
});
