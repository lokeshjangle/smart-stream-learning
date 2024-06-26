class Departmentss {
  protected employees: string[] = [];
  constructor(private readonly id: string, private name: string) {}

  //Instance Methods
  addEmployee(name: string) {
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
  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Departmentss {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class Accounting extends Departmentss {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }
  //Getter and setter
  get getLastReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error('No report found...');
  }

  set setLastReport(value: string) {
    if (!value) throw new Error('Please pass in a valid value!');
    this.addReport(value);
  }

  //override method
  addEmployee(name: string): void {
    if (name === 'Lokesh') {
      return;
    }
    // super.addEmployee(name);
    this.employees.push(name);
  }
  addReport(text: string) {
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
