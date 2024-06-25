"use strict";
const notNull = '';
const data = notNull || 'DEFAULT';
console.log(data); //DEFAULT
let userInput = null;
let storeData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storeData); //DEFAULT
userInput = '';
storeData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storeData); //''
