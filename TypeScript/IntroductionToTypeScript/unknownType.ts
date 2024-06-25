let userInput: unknown;

userInput = 5;
userInput = 'Lokesh';
console.log(typeof userInput); //unknown --> string
let userName: string;
// userName = userInput; //Error: Type 'unknown' is not assignable to type 'string'.
userName = 'Jangale';
userInput = userName; //Jangale
let userData: any;
userData = 'Jangale';
userName = userData; // "Jangale"

if (typeof userInput === 'string') {
  userName = userInput;
}
console.log(userName); //Lokesh
