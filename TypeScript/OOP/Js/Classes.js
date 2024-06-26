"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
}
const qa = new Department('QA');
qa.describe(); //Department: QA
const qaCopy = { describe: qa.describe };
qaCopy.describe(); //Department: undefined
const qaCopy2 = { name: 'Developer', describe: qa.describe };
qaCopy2.describe(); //Department: Developer
