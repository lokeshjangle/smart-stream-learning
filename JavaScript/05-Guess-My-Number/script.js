'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}
const background_Color = function (color) {
    document.querySelector("body").style.backgroundColor = color;
}
const numberBoxSize = function (size) {
    document.querySelector(".number").style.width = size;
}
const displayScore = function (score) {
    document.querySelector(".score").textContent = score;
}

const displayNumber = function (number) {
    document.querySelector(".number").textContent = number;
}
const wrongGuess = function (param) {
    if (score > 1) {
        displayMessage(param)
        score--;
        displayScore(score);
    } else {
        displayMessage("💥 You lost a game!")
        displayScore(0);
        background_Color("red");

    }
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage("⛔ No Number!");


    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Guess!");
        background_Color("#60b347");
        numberBoxSize("30rem");
        displayNumber(secretNumber);
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        //if guess is greater than secretNumber than "To high" or "To low"
        guess > secretNumber ? wrongGuess("📈 To high!") : wrongGuess("📉 To low!");

    }
})

//Reset button functionality
document.querySelector(".again").addEventListener('click', function () {
    score = 20;
    displayScore(score);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    background_Color("#222");
    numberBoxSize("15rem");
    displayNumber("?");
})