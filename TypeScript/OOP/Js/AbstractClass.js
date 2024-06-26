"use strict";
class Dept {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
}
class ITDept extends Dept {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log(`Id: ${super.id}`);
        console.log('Department: ' + super.name);
        console.log(this.admins);
    }
}
class AccountingDept extends Dept {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    describe() {
        console.log(`Id: ${this.id}`);
        console.log('Department: ' + this.name);
        console.log(this.reports);
    }
}
const itDept1 = new ITDept('IT202', ['Lokesh']);
itDept1.describe();
const acc1 = new AccountingDept('ACC230', ['Data']);
acc1.describe();
