class Department {
  name: string; //field of class not property of object

  constructor(n: string) {
    this.name = n;
  }
}

const dept = new Department("QA");
