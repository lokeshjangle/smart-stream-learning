/*
    Challenge 2: Vending Machine
 
    Create an object representing a vending machine with properties like money (amount deposited), items (an array of objects representing items with properties like name, price(2 decimals), and quantity), and dispense (a function).
    
    Option 1: The dispense function should take the name of an item as input.
    Use conditional statements and loops to check if the item exists, has sufficient quantity, and if the user has deposited enough money.
    If successful, dispense the item and deduct its price from the deposited money. Otherwise, provide appropriate error messages.
    Option 2: write another function that allow users to add money to the vending machine.
    Option 3: exit the program
*/

'use strict'
const vendingMachine = {
    deposit: 500,
    items: [
        {
            name: "Coffee",
            price: 20.0,
            quantity: 10
        },
        {
            name: "Chocolate",
            price: 1.0,
            quantity: 100
        }
    ],
    dispense: function (itemName, quantity) {
        let isItemFound = false;
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if (item.name === itemName) {
                isItemFound = true;
                if (item.quantity >= quantity && this.deposit >= (quantity * item.price) && this.deposit > 0) {
                    console.log(`Collect your ${itemName}`);
                    item.quantity -= quantity;
                    this.deposit -= (quantity * item.price);
                    break;
                }
                else if (item.name === itemName && item.quantity < quantity) {
                    console.error(`We only have this ${item.quantity} quantity of your item`);
                    break;
                }
                else if (item.name === itemName && item.quantity >= quantity && this.deposit < (quantity * item.price)) {
                    console.error(`Insufficient Balance...\nPlease add money in deposite\nYour deposite amount : ${this.deposit}`)
                    break;
                }

            }

        };
        if (!isItemFound) {
            console.error(`${itemName} Not Available`);
        }
    },
    addDeposite: function (money) {
        if (money > 0) this.deposit += money;
        else console.log("Add money more than 0 !!!");
    }
}

// vendingMachine.dispense("Coffee", 9);
// console.log(vendingMachine);
// vendingMachine.addDeposite(200);
// console.log(vendingMachine.deposit);
let i = 0;
while (i !== 3) {
    console.log("1: Buy Item \n2: Add Deposite \n3: Exit");
    let choice = 1;
    switch (choice) {
        case 1:
            vendingMachine.dispense("Coffe", 3);
            console.log(vendingMachine);
            i = 3;
            break;
        case 2:
            vendingMachine.addDeposite(200);
            console.log(vendingMachine);
            i = 3;
            break;
        case 3:
            i = 3;
            break;
        default:
            console.log("Select between 1-3");
            i = 3;
            break;
    }
}
