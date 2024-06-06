const newName = "Lokesh";
console.log("File connected");
function first() {
    const age = 32;

    if (age >= 30) {
        const decade = 3;
        console.log(newName);
        var millenial = true;
    }
    // console.log(decade);  -->ReferenceError: decade is not defined
    console.log(millenial);  //undefined
    function second() {
        const job = "JSE";
        console.log(`${newName} is a ${age}-old ${job}`);
    }
    second();
}
// second();  --> ReferenceError: second is not defined
first();
var variable = 12;
const myName2 = 'Yashwant';