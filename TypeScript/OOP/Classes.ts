class Department {
  name: string; //globalfield of class not property of object

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log('Department: ' + this.name);
  }
  // describe(this: Department) {
  //   console.log('Department: ' + this.name);
  // }
}

const qa = new Department('QA');
qa.describe(); //Department: QA

const qaCopy = { describe: qa.describe };
qaCopy.describe(); //Department: undefined

const qaCopy2 = { name: 'Developer', describe: qa.describe };
qaCopy2.describe(); //Department: Developer
