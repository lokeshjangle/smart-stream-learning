// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// }
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKolas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKolas) {
//     if (avgDolphins >= (avgKolas * 2)) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKolas})`)
//     }
//     else if (avgKolas >= (avgDolphins * 2)) {
//         console.log(`Kolas win (${avgKolas} vs. ${avgDolphins})`)
//     }
//     else {
//         console.log("No team wins.....")
//     }
// }

// checkWinner(scoreDolphins, scoreKolas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKolas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKolas);

// //////////////////////////////////////////////////
// const calcTip = function (bill) {
//     return bill * (bill >= 50 && bill <= 300 ? 15 / 100 : 20 / 100);

// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// ////////////////////////////////////////////////////

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// }
// else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// }

///////////////////////////////////////////////////////////
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = []
const totals = [];
const calcTip = function (bill) {
  return bill * (bill >= 50 && bill <= 300 ? 15 / 100 : 20 / 100);
};

for (let i = 0; i < bills.length; ++i) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  let total = bills[i] + tip;
  totals.push(total);
}
console.log("hello");
