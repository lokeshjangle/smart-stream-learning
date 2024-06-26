interface Named {
  readonly name: string; //readonly property
}
// interface Named {
//   lastName: string;
// }

interface Greetable extends Named {
  outputName?: string; //optional property
  greet(phrase?: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;
  //   outputName?: string | undefined;
  //   lastName: string;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase?: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

const gm = new Person('Lokesh');
gm.greet('Good Morning,');

//using object
let user1: Greetable;
user1 = {
  name: 'Lokesh',
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hii there - I am ');

// interface as a functions
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(10, 20)); //30
