"use strict";
class Departments {
    //By adding modifier in constructor parameter then we don't need to explicitly defined that property in field
    constructor(id, n) {
        this.id = id;
        this.name = n;
        this.employee = [];
    }
    addEmployee(name) {
        this.employee.push(name);
        // this.id = '343'; //Cannot assign to 'id' because it is a read-only property
    }
    describe() {
        console.log(`Id: ${this.id}`);
        console.log('Department: ' + this.name);
    }
    printEmployee() {
        console.log(this.employee);
    }
}
const dev = new Departments('D302', 'Developer');
dev.describe(); //Id: D302,Department: QA
dev.addEmployee('Lokesh');
dev.addEmployee('Sai');
dev.printEmployee();
