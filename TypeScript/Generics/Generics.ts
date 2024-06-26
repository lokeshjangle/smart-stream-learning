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
