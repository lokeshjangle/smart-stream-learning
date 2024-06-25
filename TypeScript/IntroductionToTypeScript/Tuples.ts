const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Lokesh',
  age: 22,
  hobbies: ['Sports', 'Coding'],
  role: [2, 'author'],
};

console.log(person);
// person.role[1] = 10; //ERROR: Type 'number' is not assignable to type 'string'.

let toupleExample: [number, string];
toupleExample = [1, 'lokesh'];
// toupleExample = [1, "Lokesh", "Jangale"]; //Error: Type '[number, string, string]' is not assignable to type '[number, string]'.

// toupleExample[1] = 12; ////ERROR: Type 'number' is not assignable to type 'string'.

let check: [number, string] = [1, 'Lokesh'];
// check = [1, "Lokesh", "Jangale"];
