const now = 2024;
const lokesh = {
    firstName: 'Lokesh',
    lastName: 'Jangale',
    age: now - 2002,
    friends: ["Yashwant", "Vishal"]
};

console.log(lokesh);
// console.log(lokesh.friends)


console.log(lokesh.firstName);
console.log(lokesh['firstName'])


const nameKey = "Name";
// console.log(lokesh."first" + nameKey)  //Not allowed
console.log(lokesh['first' + nameKey])  //Allowed


console.log(lokesh.friends[0])



////////////////////////////////////////////////////////////

//Diffrent objects method

//We can also pass function in object
'use strict'
const demo = {
    firstName: 'Lokesh',
    lastName: 'Jangale',
    birthYear: 2002,
    friends: ["Yashwant", "Vishal"],
    hasDrivingLicence: true,
    calcAge: function () {
        return now - this.birthYear;  //'this.' represent the current object
    }
};



const lokeshArray = ['LOkesh', "Jangale", 2002, ["Yashwant", "Vishal"], true];
const yashWant = ['Yashwant', 'Patil', 1997, true]

console.log(demo.currentCity)

console.log(10);
console.warn(10);
console.error(10);
console.table(demo);
delete demo.hasDrivingLicence;  //delete is use to remove properties from object
console.log(demo);
demo.gender = "Male";   //Adding properties in object
console.log(demo);



