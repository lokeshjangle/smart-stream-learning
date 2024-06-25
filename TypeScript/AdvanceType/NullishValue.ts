const notNull = '';
const data = notNull || 'DEFAULT';
console.log(data); //DEFAULT

let userInput = null;
let storeData = userInput ?? 'DEFAULT';
console.log(storeData); //DEFAULT

userInput = '';
storeData = userInput ?? 'DEFAULT';
console.log(storeData); //''
