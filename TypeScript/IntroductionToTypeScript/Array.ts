const person = {
  name: "Lokesh",
  age: 22,
  hobbies: ["Sports", "Coding"],
};

console.log(person.hobbies); //[ 'Sports', 'Coding' ]

let favActivities: string[];
// favActivities = "Sports"; // ERROR: Type 'string' is not assignable to type 'string[]'

// favActivities = ['Sports',3] //ERROR: Type 'number' is not assignable to type 'string'.

favActivities = ["Sports", "Coding"];
console.log(favActivities); //[ 'Sports', 'Coding' ]
console.log(typeof favActivities); //object

let value: (string | number)[];
value = ["Lokesh", 3];
console.log(value); //[ 'Lokesh', 3 ]

for (const fav of favActivities) {
  console.log(fav.toUpperCase());
  //   console.log(fav.map()); //Property 'map' does not exist on type 'string'.
}
