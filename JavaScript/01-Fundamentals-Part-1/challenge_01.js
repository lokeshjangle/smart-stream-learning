/*
    Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/

let markMass = 78;
let markHight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / (markHight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);



const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) console.log("Dolphins win the trophy");
else if (scoreDolphins < scoreKoalas) console.log("Koalas win the trophy")
else console.log("Both win the trophy")





//Challenge 04
const bill = 275;
// let tip;
// if (bill >= 50 && bill <= 300) {
//     tip = bill * (15 / 100);
// }
// else {
//     tip = bill * (20 / 100);
// }

let tip = bill * (bill >= 50 && bill <= 300 ? 15 / 100 : 20 / 100);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)