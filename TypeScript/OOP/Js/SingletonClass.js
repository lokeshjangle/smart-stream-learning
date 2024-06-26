"use strict";
class SingletonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new SingletonClass('Lokesh', 22);
        return this.instance;
    }
}
const lokesh = SingletonClass.getInstance();
console.log(lokesh);
