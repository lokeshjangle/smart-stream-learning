'use strict'
const calAge = function (birthyear) {
    let data = 0;
    console.log(this);  //undefined for function expression/function declaration
    function calAdd() {
        console.log(this); //undefined
    }
    calAdd()
}
calAge(2001)



const checkThisForArrow = () => {
    console.log(this);  //refer sorrounding function in this case window function/global function
}
checkThisForArrow();

const lokesh = {
    name: "lokesh",
    year: 2002,
    calAge: function () {
        console.log(2024 - this.year);
    }
}