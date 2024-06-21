'use strict';

console.log(23 === 23.0); //true

console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

//type conversion
console.log(Number('23')); //23
//Automatic type coersion
console.log(+'23'); //23

//Parse number from string
console.log(Number.parseInt('30px', 10)); //30 --> js try to remove spring 'px' from string and return only number
console.log(Number.parseInt('e30', 10)); //NaN--> string should start by number

console.log(Number.parseInt('2.4rem')); //2
console.log(Number.parseFloat('2.4rem')); //2.4

//.isNaN() --> check given value is  not a number or it is number
console.log(Number.isNaN(23)); //false
console.log(Number.isNaN('23')); //false
console.log(Number.isNaN(+'23x')); //true
console.log(Number.isNaN(10 / 0)); //false

//.isFinite() :--> checking a value is a number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20s')); //false
console.log(Number.isFinite(10 / 0)); //false

//.isInteger() :--> checking value is integer or not
console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false
console.log(Number.isInteger('20')); //false
console.log(Number.isInteger(+'20s')); //false

//Different MatheMatic operation
//Math.sqrt()
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

//Math.max()
console.log(Math.max(5, 11, 23, 11, 2)); //23
console.log(Math.max(5, 11, '23', 11, 2)); //23 -->Automatically do type coersion
console.log(Math.max(5, 11, '23px', 11, 2)); //NaN

//Math.min()
console.log(Math.min(5, 11, 23, 11, 2)); //2

//Math.PI --> constant value 3.14
console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793

//Math.random() --> generate random value between 0-1
console.log(Math.random()); //0.7809015283853693
console.log(Math.random() * 6); //5.098301738161185

//Math.trunc() --> remove fractional part
console.log(Math.trunc(2.34343)); //2
console.log(Math.trunc(Math.random() * 6)); //2

//function to print random integer in given range
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(2, 20));

//Rounding Integers
console.log(Math.round(23.3)); //23
console.log(Math.round(23.7)); //24

//ceil() method --> Round as a bigger integer
console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.7)); //24

//floor() method--> Round as a smaller integer
console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.7)); //23

console.log(Math.floor(-23.3)); //-24
console.log(Math.trunc(-23.7)); //-23

// Rounding decimals
console.log((2.7).toFixed(0)); //3 -->string
console.log((2.7).toFixed(3)); //2.700 -->string
console.log((2.345).toFixed(3)); //2.345 -->string
console.log(+(2.345).toFixed(3)); //2.345 -->integer
console.log(+(2.33343434).toFixed(2)); //2.33

//Remainder operator: (%) --> it return a remainder of expression
console.log(10 % 3); //1

//Numeric separator: (_)
const diameter = 287_460_000_000; //287,460,000,000
console.log(diameter); //287460000000
console.log(1_0 + 20); //30

console.log(Number('234_343')); //NaN

//International Number formation

const num = 3884764.23;
console.log('US:    ', new Intl.NumberFormat('en-US').format(num));
console.log(num);
