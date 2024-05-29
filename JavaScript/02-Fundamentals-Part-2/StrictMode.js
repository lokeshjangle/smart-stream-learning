//Code without using strict mode
/*
let hasDrivingLicence = false
const passTest = true

if (passTest) hasDrivinLicence = true
if (hasDrivingLicence) console.log("I can drive now");
*/

//Above code is not giving error when i was assign value to wrong variable thats why it cause a bug in our program
// 'use strict'
// let hasDrivingLicence = false;
// const passTest = true;

// if (passTest) hasDrivinLicence = true;
// if (hasDrivingLicence) console.log("I can drive now");

//This code give us a error message about hasDrivinLicence variable is not defined


// console.log("Lokesh " + "Jangale")
let firstName = "lokesh"
let lastName = "Jangale"

console.log(firstName + " " + lastName)

console.log("Your Full name is " + firstName + " " + lastName);

console.log(`Your full name is ${firstName} ${lastName}`)

function display(arg) {
    console.log(arg);
}

display("Lokesh");
display(firstName)
display(`${firstName}`)

