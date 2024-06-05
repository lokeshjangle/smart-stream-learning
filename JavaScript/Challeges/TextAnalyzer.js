/*
    Challenge 3: Text Analyzer
 
    Prompt the user to enter a sentence or paragraph.
    Option 1: Write functions to:   
    Count the total number of words (use string manipulation methods like split()).
    Find the longest word (use loops and string comparison).
    Check if the sentence is a palindrome (a word or phrase that reads the same backward as forward) using conditional statements and string manipulation.
    give number of occurences of keyword Error (incasesensitive)
    Replace if keyword "ERROR" is found with "Error" 
    Write a regular expression to match all email addresses in a string.
       Display the results of each analysis to the user.
*/

'use strict'
// const sentence = `Hello My name is Lokesh Jangale Error ERROR lokeshjangle@gmail.com ypatil@yahoo.com`;
const sentence = `I am lokesh am I`;
const arr = sentence.split(" ");


//======================COUNT WORD===================
const countWord = function (arr) {
    console.log(`Total count of word : ${arr.length}`)
}
// countWord(arr);

//====================LONGEST WORD===================
const longestWord = function (arr) {
    let element = arr[0];
    let nextElement = arr[1];
    for (let i = 2; i <= arr.length; i++) {

        if (element.length <= nextElement.length) {
            element = nextElement;
            nextElement = arr[i];
        }
        else {
            nextElement = arr[i];
        }
    }
    console.log(`Longest Word in string : ${element}`);
}

// longestWord(arr);

//===========================ERROR WORD CHECK====================
const errorWordFind = function (arr) {
    let count = 0;
    arr.forEach(element => {
        if (element === "ERROR") {
            element = "Error";
        }
        if (element === "Error") {
            ++count;
        }
    });
    console.log(`Total count of Error word : ${count}`);
}

//=================CHECK PALINDROME STRING===================
const checkPalindrome = function (arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            console.log('Sentence is not palindrome');
            return;
        }

    }
    console.log('Sentence is palindrome');
}

//======================CHECK EMAIL====================
const checkEmail = function (arr) {

    arr.forEach(element => {
        if (element.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
            console.log(element);
        }
    });
}

countWord(arr);
longestWord(arr);
checkPalindrome(arr);
errorWordFind(arr);
checkEmail(arr);