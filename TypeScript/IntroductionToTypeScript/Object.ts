type Person = {
  name: string;
  age: number;
};

const persons: Person = {
  name: 'Lokesh',
  age: 23,
};

// const person = {
//   name: "Lokesh",
//   age: 23,
// };
// console.log(person.name); //lokesh
// console.log(person.nickName); //Property 'nickName' does not exist on type

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
};
