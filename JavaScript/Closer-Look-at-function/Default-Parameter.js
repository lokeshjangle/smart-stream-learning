'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassenger = 1, //Default value if not any value/undefined is pass
  price = 1000 * numPassenger //Perform calculation as default value
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //{ flightNum: 'LH123', numPassenger: 1, price: 1000 }
createBooking('LH123', 2); //{ flightNum: 'LH123', numPassenger: 2, price: 2000 }
createBooking('LH123', 3, 1500); //{ flightNum: 'LH123', numPassenger: 3, price: 1500 }
//skip parameter to get default value
createBooking('LH123', undefined, 3000); //{ flightNum: 'LH123', numPassenger: 1, price: 3000 }
