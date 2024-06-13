'use strict';
//Manipulate this keyword of different objcet
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function{}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Lokesh Jangale');
lufthansa.book(834, 'Yashwant Patil');
console.log(lufthansa);
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// book(23, 'Sarah Williams');//undefined because it is only normal function and for every normal functioncall this keyword is undefined
book.call(eurowings, 232, 'Sarah Williams'); //this keyword points eurowings object
//.call() function have first parameter is 'this' object which is use to point which object should point
console.log(eurowings);
book.call(lufthansa, 439, 'Sagrika sinha');
console.log(lufthansa);

//Apply method --> apply() method take second argument array
book.apply(eurowings, [564, 'Vishal Patil']);
console.log(eurowings);

//bind() function
const bookEW = book.bind(eurowings);
bookEW(343, 'Vikram Patil');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23); //with default arguments
bookEW23('Swarda Adwanikar');
console.log(eurowings);

//bind function for partial application
const addTax = (rate, value) => value + value * rate;
console.log(0.1, 200);

const addVAT = addTax.bind(null, 0.23); //-->(this, rate)
//addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addTaxRate(0.23)(100));
