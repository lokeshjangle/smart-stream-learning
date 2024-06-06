'use strict'
// const calAge = function (birthyear) {
//     let data = 0;
//     console.log(this);  //undefined for function expression/function declaration
//     function calAdd() {
//         console.log(this); //undefined
//     }
//     calAdd()
// }
// calAge(2001)



// const checkThisForArrow = () => {
//     console.log(this);  //refer sorrounding function in this case window function/global function
// }
// checkThisForArrow();

// const lokesh = {
//     name: "lokesh",
//     year: 2002,
//     calAge: function () {
//         console.log(2024 - this.year);
//     }
// }'

const lokesh = {
    firstName: 'Lokesh',
    year: 2002,
    // calcAge:  () => {
    //     console.log(this);   //undefined
    //     console.log(2024 - this.year);  //NaN
    // }
    calcAge: function () {
        console.log(this);   //{ firstName: 'Lokesh', year: 2002, calcAge: [Function: calcAge] }
        console.log(2024 - this.year);  //22
        // const isEligible = function () {
        //         console.log(self);  //undefined
        //         console.log((2024 - self.year) > 18); //TypeError: Cannot read properties of undefined (reading 'year')
        //     }
        // const self = this;
        // const isEligible = function () {
        //     console.log(self);  //{ firstName: 'Lokesh', year: 2002, calcAge: [Function: calcAge] }
        //     console.log((2024 - self.year) > 18); //true
        // }
        const isEligible = () => {
            console.log(this);  //{ firstName: 'Lokesh', year: 2002, calcAge: [Function: calcAge] }
            console.log((2024 - this.year) > 18); //true
        }
        isEligible();
    }
}

lokesh.calcAge();