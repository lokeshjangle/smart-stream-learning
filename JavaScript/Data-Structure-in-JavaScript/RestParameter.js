'use strice';

//SPREAD OPERATOR
const arr = [1, 2, ...[3, 4]];
console.log(arr); //[ 1, 2, 3, 4 ]

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 [ 3, 4, 5 ]
