'use strict';

//International dates API
const now = new Date();
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

//International Number Formator
const num = 3884764.23;
console.log('US     : ', new Intl.NumberFormat('en-US').format(num)); //US     :  3,884,764.23
console.log('Germany: ', new Intl.NumberFormat('en-DE').format(num)); //Germany:  3.884.764,23
console.log('INDIA  : ', new Intl.NumberFormat('en-IN').format(num)); //INDIA  :  38,84,764.23
console.log('Marathi: ', new Intl.NumberFormat('mr-IN').format(num)); //Marathi:  ३८,८४,७६४.२३

const numOptions = {
  style: 'unit', //unit,percent,currency
  unit: 'mile-per-hour', //mile-per-hour,celcius
  currency: 'EUR', //INDIA  :  €38,84,764.23
  //   useGrouping: false, //3884764.23 --> Number will printed without separator
};
console.log(
  'US     : ',
  new Intl.NumberFormat('en-US', numOptions).format(num)
); //US     :  3,884,764.23 mph
console.log(
  'Germany: ',
  new Intl.NumberFormat('en-DE', numOptions).format(num)
); //Germany:  3.884.764,23 mph
console.log(
  'INDIA  : ',
  new Intl.NumberFormat('en-IN', numOptions).format(num)
); //INDIA  :  38,84,764.23 mph
console.log(
  'Marathi: ',
  new Intl.NumberFormat('mr-IN', numOptions).format(num)
); //Marathi:  ३८,८४,७६४.२३ मैप्रता
