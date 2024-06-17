'use strict';

console.log(Number.MAX_SAFE_INTEGER);
//BigInt
console.log(212122322432424234252424253453553); //2.1212232243242423e+32
console.log(212122322432424234252424253453553n); //212122322432424234252424253453553n
console.log(BigInt(212122322432424234252424253453553));

//Operation
console.log(100000n + 100000n);

const bigNum = 34324259849823893902424723n;
const normalNum = 23;
// console.log(bigNum * normalNum); //TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(bigNum * BigInt(normalNum)); //789457976545949559755768629n
console.log(typeof bigNum); //bigint

//Exception
console.log(20n === 20); //false
console.log(20n == 20); //true

console.log(bigNum + ' is really big'); //--> number convert in string

//Division
console.log(10n / 3n); //3n
console.log(10 / 3); //3.33333333
