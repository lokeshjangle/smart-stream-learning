'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

//slice() method--> extract sub-array without changing original array
console.log(arr.slice(2)); //[ 'c', 'd', 'e' ]
console.log(arr.slice(2, 4)); //[ 'c', 'd' ]
console.log(arr.slice(-2)); //[ 'd', 'e' ]
console.log(arr.slice(-1)); //[ 'e' ]
console.log(arr.slice(1, -2)); //[ 'b', 'c' ]

//slice() method is also use to create shallow copy of any array
const newArrCpy = arr.slice(); //create shallow copy of original array
console.log(newArrCpy); //[ 'a', 'b', 'c', 'd', 'e' ]
newArrCpy.pop();
console.log(newArrCpy); //[ 'a', 'b', 'c', 'd' ]
console.log(arr); //[ 'a', 'b', 'c', 'd', 'e' ]

let check = arr; //Deep copy of original array
check.push(3);
console.log(check); //[ 'a', 'b', 'c', 'd', 'e', 3 ]
console.log(arr); //[ 'a', 'b', 'c', 'd', 'e', 3 ]

//splice() method: --> same as slice() but it mutate original array
// console.log(arr.splice(2)); //[ 'c', 'd', 'e', 3 ]

//remove element from given range
arr.splice(1, 3); //[ 'a','e', 3 ] --> it remove element from given range and how many element is delete (index,count)
console.log(arr); //[ 'a','e', 3 ]

//Reverse method --> mutate original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //[ 'f', 'g', 'h', 'i', 'j' ]
console.log(arr2); ////[ 'f', 'g', 'h', 'i', 'j' ]

//Concat method --> concatinate two array
const letters = arr.concat(arr2);
console.log(letters); //['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j' ]
console.log(...arr, ...arr2); //also perform concatenation

//Join() method
console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j

//at() method: --> use to find value at index
const array = [23, 11, 64];
console.log(array[0]); //23
console.log(array.at(0)); //23
console.log(array.at(-1)); //64 -->getting last array element

//at() method with string
console.log('Lokesh'.at(0)); //L
console.log('Lokesh'.at(-1)); //h

//Loop over an array using forEach() method;
const foreachArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
foreachArray.forEach(function (e) {
  console.log(e);
});

//forEach with index
foreachArray.forEach(function (element, index) {
  console.log(`${index}: ${element}`);
});

//Data Transformation with MAP, FILTER, REDUCE

//array.map() method
const movementsMap = [200, 450, -400, 3000];

const movementsUSD = movementsMap.map(function (mov) {
  return mov * 1.1;
});
// const movementsUSD = movements.map(mov => mov * 1.1);
console.log(movementsMap); //[ 200, 450, -400, 3000 ]
console.log(movementsUSD); //[ 220.00000000000003, 495.00000000000006,-440.00000000000006, 3300.0000000000005]

//map method with index
const nameArr = ['lokesh', 'Yashwant', 'Sagrika', 'Vikram', 'lokesh'];
const indexMap = nameArr.map((name, i) => {
  return `${i}: ${name}`;
});

console.log(indexMap); //[ '0: lokesh', '1: Yashwant', '2: Sagrika', '3: Vikram' ]

//array.filter() method
const movementsFilter = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movementsFilter.filter(function (mov, index) {
  return mov > 0;
});
console.log(deposits); //[ 200, 450, 3000, 70, 1300 ]

//array.reduce() method
const movementsReduce = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movementsReduce.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance); //3840

//Maximum value
const max = movementsReduce.reduce(function (acc, cur) {
  return acc > cur ? acc : cur;
}, 0);

console.log(max);

//Method chaining
const movementsChaining = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDepositsUSD = movementsChaining
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * 1.1;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

//find() method: -> to retrieve one element from array based on condition
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const withdrawal = movements.find(mov => mov < 0);
console.log(withdrawal); //-400

const ch = movements.forEach(mov => mov);
console.log(ch);

//findIndex() method: -> is used to find index of value
console.log(movements.findIndex(param => param === 70)); //6

//some() method: -> It will return true by finding any value in array based on the given condition
//Equality
// console.log(movements.includes(-130)); //true

//Condition
console.log(movements.some(mov => mov === -130)); //true
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); //true

//Every() method:-> It only return true if all element in array satisfy the given conditoin
console.log(movements.every(mov => mov > 0)); //false
console.log(movements.every(mov => mov % 10 == 0)); //true

//flat() method:-> merge all nested array into one big array , it goes only one level to merge
const arrr = [[1, 2, 3, 4], [5, 6], 7, 8];
console.log(arrr.flat()); //[1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3, 4], [5, 6], 7, 8];
console.log(arrDeep.flat()); //[[1, 2 ], 3, 4, 5, 6, 7, 8 ]
console.log(arrDeep.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]

//flatMap() :-> combination of map and flat method

//sort() method :-> Sorting arrays
const owner = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owner.sort()); //[ 'Adam', 'Jonas', 'Martha', 'Zach' ]
console.log(owner);

//sort numbers in array
const num = [1, 3, 4, 2, 5, 6, 9, 8, 7];

//accending order
console.log(
  num.sort((a, b) => {
    // return a - b;
    if (a > b) return 1;
    if (a < b) return -1;
  })
); //[1, 2, 3, 4, 5,6, 7, 8, 9]

//sortin array in descending order
console.log(
  num.sort((a, b) => {
    // return b - a;
    if (a > b) return -1;
    if (a < b) return 1;
  })
); //[9, 8, 7, 6, 5, 4, 3, 2, 1]

//Create empty array and fill it using fill() method
const x = new Array(7); //array with 7 element size
console.log(x); //[ <7 empty items> ]

//fill() method: -> it fill element in array
// x.fill(1);
// console.log(x);//[1, 1, 1, 1, 1, 1, 1];

x.fill(1, 3);
console.log(x); //[ <3 empty items>, 1, 1, 1, 1 ]

x.fill(1, 3, 5);
console.log(x); //[ <3 empty items>, 1, 1, <2 empty items> ]

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y); //[1, 1, 1, 1, 1, 1, 1];

const z = Array.from({ length: 8 }, (_, i) => i + 1);
console.log(z); //[1, 2, 3, 4, 5, 6, 7, 8]
