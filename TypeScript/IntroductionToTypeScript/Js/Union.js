"use strict";
function combine(input1, input2) {
    let result; //union type variable
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(2, 3)); // 5
console.log(combine('Hello', 'World')); // "HelloWorld"
