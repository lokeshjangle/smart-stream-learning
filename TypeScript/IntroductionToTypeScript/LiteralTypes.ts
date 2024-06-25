function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result: string | number; //union type variable
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine(2, 3, 'as-number')); // 5
console.log(combine('30', '26', 'as-number')); //56
console.log(combine('30', '26', 'as-text')); //3026
console.log(combine('Hello', 'World', 'as-text')); // "HelloWorld"

let currentStatus: 'pending' | 'approved' | 'rejected';
currentStatus = 'pending'; //pending
currentStatus = 'approved'; //approved
currentStatus = 'rejected'; //rejected
// currentStatus = 'fails'; //Error: Type '"fails"' is not assignable to type '"pending" | "approved" | "rejected"'
console.log(currentStatus);

const variables: any = 'Lokesh';
const variables2: string = 'Yashwant';
