abstract class Dept {
  abstract describe(): void;
  protected employees: string[] = [];
  constructor(protected readonly id: string, protected name: string) {}
}

class ITDept extends Dept {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe(): void {
    console.log(`Id: ${super.id}`);
    console.log('Department: ' + super.name);
    console.log(this.admins);
  }
}

class AccountingDept extends Dept {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  describe(): void {
    console.log(`Id: ${this.id}`);
    console.log('Department: ' + this.name);
    console.log(this.reports);
  }
}

const itDept1 = new ITDept('IT202', ['Lokesh']);
itDept1.describe();

const acc1 = new AccountingDept('ACC230', ['Data']);
acc1.describe();
