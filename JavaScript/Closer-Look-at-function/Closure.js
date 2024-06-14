'use strict';

const secureBooking = function () {
  let passangerCount = 0;
  let count = 1;
  return function () {
    passangerCount++;
    count++;
    console.log(`${passangerCount} passengers`);
  };
};

const booker = secureBooking();
booker(); //1 passengers
booker(); //2 passengers
booker(); //3 passengers
console.dir(booker);

// for (var index = 1; index <= 3; index++) {
//   setTimeout(function () {
//     console.log('after ' + index + ' second(s):' + index);
//   }, index * 1000);
// }

//Example

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
