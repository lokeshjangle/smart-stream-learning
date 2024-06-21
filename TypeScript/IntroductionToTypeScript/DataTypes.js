function add(n1, n2) {
    return n1 + n2;
}
// const num1 = "5";  // Argument of type 'string' is not assignable to parameter of type 'number'.
// const num2 = "2.8"; //Error
var num1 = 5;
var num2 = 2.8;
var result = add(num1, num2);
console.log(result);
function personalDetail(name, birthYear, isMale) {
    console.log("My name is ".concat(name, ", and I was born in ").concat(birthYear, " and my gender is ").concat(isMale ? "Male" : "Female"));
}
personalDetail("Lokesh", 2002, true);
personalDetail("Sagrika", 1996, false);
// let variable = 9;
// variable = "Lokesh"; // Error: Type 'string' is not assignable to type '
var variable;
variable = 9; //9
variable = "Lokesh";
console.log(variable);
