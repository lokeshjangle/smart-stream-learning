function combine(input1: number | string, input2: number | string) {
  let result: string | number; //union type variable
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine(2, 3)); // 5
console.log(combine('Hello', 'World')); // "HelloWorld"

type Admin = {
  name: string;
  privillage: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin | Employee;

const e1: ElevatedEmployee = {
  name: 'Lokesh',
  privillage: ['create-server'],
  // startDate: new Date(),
};
