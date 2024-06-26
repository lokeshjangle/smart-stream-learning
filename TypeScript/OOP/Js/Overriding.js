"use strict";
class Departmentss {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    addEmployee(name) {
        this.employee.push(name);
    }
    describe() {
        console.log(`Id: ${this.id}`);
        console.log('Department: ' + this.name);
    }
    printEmployee() {
        console.log(this.employee);
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
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const itDept = new ITDepartment('D302', ['Lokesh']);
itDept.describe();
const accDept = new Accounting('A202', ['Try Again!!']);
accDept.addReport('Something went wrong!!');
accDept.describe();
accDept.printReports();
