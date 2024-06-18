'use strict';

//Create a date
const now = new Date();
console.log(now); //Mon Jun 17 2024 18:27:59 GMT+0530 (India Standard Time)
console.log(now.toDateString()); //Mon Jun 17 2024
console.log(new Date('Mon Jun 17 2024 ')); //Mon Jun 17 2024 18:27:59 GMT+0530 (India Standard Time)
console.log(new Date('Augest 12, 2024')); //Mon Aug 12 2024 00:00:00
console.log(new Date(2024, 5, 18, 15, 23, 5)); //Thu Jul 18 2024 15:23:05
console.log(new Date(2024, 7, 32, 15, 23, 5).toDateString()); //Sun Sep 01 2024
console.log(now.getDay()); //1

console.log(now.getMonth()); //5

console.log(new Date('July,7,69').getFullYear()); //1969

//working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //2037-11-19T09:53:00.000Z
console.log(future.toDateString()); //Thu Nov 19 2037
console.log(future.getFullYear()); //2037
console.log(future.getMonth()); //10
console.log(future.getDate()); //19
console.log(future.getDay()); //4
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
console.log(future.toISOString()); //2037-11-19T09:53:00.000Z
console.log(future.getTime()); //2142237180000
console.log(new Date(2142237180000).toDateString()); //Thu Nov 19 2037

console.log(Date.now()); //1718631315444 --> current time stamp

//Operation over the dates
console.log(Number(future));

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2002, 8, 12), new Date(2024, 8, 12));
console.log(days1);

//International dates API
let newDate = new Intl.DateTimeFormat('en-IN').format(now); //18/6/2024
console.log(newDate);

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', //2-digit: 08, numeric: 8
  year: 'numeric', //2-digit: 24
  weekday: 'long',
};
// newDate = new Intl.DateTimeFormat('mr-IN', options).format(now); //मंगळवार, १८ जून, २०२४ रोजी ११:१७ AM

newDate = new Intl.DateTimeFormat('en-IN', options).format(now); //Tuesday 18 June, 2024 at 11:16 am
console.log(newDate);

// const locals = navigator.language; //--> to identify local time-zone using browser
// newDate = new Intl.DateTimeFormat(locals, options).format(now); //Tuesday 18 June, 2024 at 11:16 am
// console.log(newDate);
