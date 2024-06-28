// const names: Array<string> = []; //names : string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then(data => {
//   console.log(data);
//   data.split(' ');
// });

//Create your own generic
function merge<T, U>(objA: T, objB: U) {
  //T / U: Type
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Lokesh' }, { age: 22 });
console.log(mergedObj);

const strictMerge = merge<{ name: string }, { age: number }>(
  { name: 'Yashwant' },
  { age: 27 }
);
console.log(strictMerge);

//Another generic function
interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!')); //[ 'Hi there!', 'Got 9 elements' ]
console.log(countAndDescribe(['Lokesh', 'Jangale'])); //[ [ 'Lokesh', 'Jangale' ], 'Got 2 elements' ]

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Lokesh' }, 'name')); //Value: Lokesh
// console.log(extractAndConvert({ name: 'Lokesh' }, 'age')); //Argument of type '"age"' is not assignable to parameter of type '"name"'
