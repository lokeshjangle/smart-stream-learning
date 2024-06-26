"use strict";
class Departmentss {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    //Instance Methods
    addEmployee(name) {
        this.employees.push(name);
    }
    describe() {
        console.log(`Id: ${this.id}`);
        console.log('Department: ' + this.name);
    }
    printEmployee() {
        console.log(this.employees);
    }
    //Static methods
    static createEmployee(name) {
        return { name: name };
    }
}
class ITDepartment extends Departmentss {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class Accounting extends Departmentss {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    //Getter and setter
    get getLastReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error('No report found...');
    }
    set setLastReport(value) {
        if (!value)
            throw new Error('Please pass in a valid value!');
        this.addReport(value);
    }
    //override method
    addEmployee(name) {
        if (name === 'Lokesh') {
            return;
        }
        // super.addEmployee(name);
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const emp1 = Departmentss.createEmployee('Lokesh');
console.log(emp1);
const itDept = new ITDepartment('D302', ['Lokesh']);
itDept.describe();
const accDept = new Accounting('A202', ['Try Again!!']);
accDept.addReport('Something went wrong!!');
accDept.describe();
accDept.printReports();
accDept.addEmployee('Lokesh');
accDept.addEmployee('Sai');
accDept.printEmployee();
console.log(accDept.getLastReport); //Getter call
accDept.setLastReport = 'Year End Report'; //Setter call
// accDept.setLastReport = ''; //Error: Please pass in a valid value!
accDept.printReports();
