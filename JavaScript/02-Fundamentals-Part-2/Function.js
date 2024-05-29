function logger() {
    console.log("Hii I am lokesh");
}

logger();


function fruit(apple, oranges) {
    console.log(apple, oranges);
    const juice = `Juice of ${apple} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruit(5, 0);
console.log(appleJuice);

const orangeJuice = fruit(0, 5);
console.log(orangeJuice);
