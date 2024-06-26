class Departments {
  // private readonly id: string;
  public name: string; //make field public (default)
  protected employee: string[]; //make field private

  //By adding modifier in constructor parameter then we don't need to explicitly defined that property in field
  constructor(private readonly id: string, n: string) {
    this.name = n;
    this.employee = [];
  }

  addEmployee(name: string) {
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
