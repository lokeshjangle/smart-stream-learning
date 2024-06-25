"use strict";
const addd = (...numbers) => {
    let result = 0;
    for (const num of numbers) {
        result += num;
    }
    return result;
};
console.log(addd(1, 2, 3, 4, 5, 6, 6)); //27
