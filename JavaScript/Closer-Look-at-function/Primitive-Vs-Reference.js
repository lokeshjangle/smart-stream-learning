'use strict';

const flight = 'LH204';
const lokesh = {
  name: 'Lokesh Jangale',
  passport: 322456483683,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH323';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 322456483683) {
    console.log('Checked in');
  } else {
    console.log('Wrong Passport!');
  }
  console.log(passenger);
};
checkIn(flight, lokesh); //{ name: 'Mr. Lokesh Jangale', passport: 322456483683 }

// checkIn(flight, { ...lokesh }); //{ name: 'Lokesh Jangale', passport: 322456483683 }

console.log(flight); //LH204
console.log(lokesh); // name: 'Mr. Lokesh Jangale', passport: 322456483683 } --> It is reference type so the reference is pass to the function and function can manipuate reference type to avoid this we can pass shallow copy of object --> checkIn(flight, { ...lokesh });

//This function try to change passport number
//original object: { name: 'Mr. Lokesh Jangale', passport: 322456483683 }
const changePassport = function (passenger) {
  passenger.passport = Math.trunc(Math.random() * 100000000);
};
// changePassport(lokesh); //{ name: 'Mr. Lokesh Jangale', passport: 86093387 }

changePassport({ ...lokesh });
console.log(lokesh); //{ name: 'Mr. Lokesh Jangale', passport: 322456483683 }
