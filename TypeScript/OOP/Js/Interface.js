"use strict";
class Person {
    //   outputName?: string | undefined;
    //   lastName: string;
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
const gm = new Person('Lokesh');
gm.greet('Good Morning,');
//using object
let user1;
user1 = {
    name: 'Lokesh',
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user1.greet('Hii there - I am ');
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(10, 20)); //30
