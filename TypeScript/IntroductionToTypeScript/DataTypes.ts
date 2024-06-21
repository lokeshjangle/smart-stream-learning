function add(n1: number, n2: number) {
  return n1 + n2;
}

// const num1 = "5";  // Argument of type 'string' is not assignable to parameter of type 'number'.
// const num2 = "2.8"; //Error

const num1 = 5;
const num2 = 2.8;

const result = add(num1, num2);
console.log(result);

function personalDetail(name: string, birthYear: number, isMale: boolean) {
  console.log(
    `My name is ${name}, and I was born in ${birthYear} and my gender is ${
      isMale ? "Male" : "Female"
    }`
  );
}
personalDetail("Lokesh", 2002, true);
personalDetail("Sagrika", 1996, false);

// let variable = 9;
// variable = "Lokesh"; // Error: Type 'string' is not assignable to type '

let variable: number;
variable = 9; //9
// variable = "Lokesh";// Error: Type 'string' is not assignable to type '
console.log(variable);
