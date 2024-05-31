'use strict'
function logger() {
    console.log("Hii I am lokesh");
}

logger();


function fruit(apple, oranges) {
    console.log(apple, oranges);
    const juice = `Juice of ${apple} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruit(5, 0);
console.log(appleJuice);

const orangeJuice = fruit(0, 5);
console.log(orangeJuice);

//Function declaration
console.log(calAge1(2002))
function calAge1(param) {
    return 2024 - param;
}


//Function expression

const calAge = function (param) {
    return 2024 - param;
}
const age = calAge(2002);
console.log(age);

const cal = (param) => 2024 - param;

//Arrow function

const yearsUntilRetirement = (birthYear, firstName) => {  //Arrow Function declaration
    let age = 2024 - birthYear;
    calAge()
    const retirement = 60 - age;
    return `${firstName} is retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2002, "Lokesh"))  //Arrow Function Calling


function random(val) {

    console.log(val(18));
}

random(calAge);
