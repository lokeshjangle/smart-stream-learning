class SingletonClass {
  private static instance: SingletonClass;
  private constructor(private name: string, private age: number) {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new SingletonClass('Lokesh', 22);
    return this.instance;
  }
}

const lokesh = SingletonClass.getInstance();
console.log(lokesh);
