'use strict';

const rest = new Map();
rest.set('name', 'Classico Italiano'); //Key with string data type
rest.set(1, 'Firenze,Italy'); //Key with integer data types

//Set method also return map
console.log(rest.set(2, 'Lisbon,Portugal'));

//You can also use set() method chainin
rest
  .set('categories', ['Italian', 'Pizzaria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :)')
  .set(false, 'We are close :(');
console.log(rest);

//To retrive the element from map--> keys are case sensitive
console.log(rest.get('name')); //Classico Italiano
console.log(rest.get(1)); //Firenze,Italy
console.log(rest.get(true)); //we are open :)

//Check particular key available in map or not
console.log(rest.has('categories')); //true

//To remove key from map
rest.delete(2);
console.log(rest);

//To check size of map
console.log(rest.size); //7

//To remove all the element from the map
// rest.clear();
// console.log(rest); //Map(0) {}

//use arrays or object as map keys
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.get([1, 2])); //undefined --> both object has different memory location in heap

//To work above operation use like this
let arr = [1, 2];
rest.set(arr, 'Test2');
console.log(rest);
console.log(rest.get(arr)); //Test2
// rest.set('name', 'baba ka dhaba');  //Replace the value of previously available keys
// console.log(rest);

//use object as a map keys
rest.set({ name: 'Lokesh', age: '23' }, 'ObjectData');
console.log(rest);

//Insert element in map through Map() constructor
const question = new Map([
  ['question', 'What is the best programming languange in the World?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try Again!'],
]);
console.log(question);

//Convert object to map
const data = { name: 'Lokesh', age: '23' };
console.log(Object.entries(data)); //[ [ 'name', 'Lokesh' ], [ 'age', '23' ] ]
const mapData = new Map(Object.entries(data));
console.log(mapData); //Map(2) { 'name' => 'Lokesh', 'age' => '23' }

//Iteration over a map
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const ans = 3;
console.log(ans);
console.log(question.get(question.get('correct') === 3)); //Correct🎉

//Convert map to aray
const mapToArray = [...question];
console.log(mapToArray);
