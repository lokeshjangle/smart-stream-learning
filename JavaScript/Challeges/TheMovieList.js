/*
Challenge 1: The Movie List
 
Create an array of objects where each object represents a movie. Each movie object should have properties for title, genre, and release year.
 
Option 1:  Write a function that takes this movie list as input and displays the title and release year of each movie in the console, formatted like: "TITLE (Year)". title should be in upper case irrespective of how it is stored in object.
Option 2:  Write a function to filter the movies based on a specific genre provided by the user (e.g., "comedy") and display only those movies.
Option 3: exit the program
 
when i input 3 then only the program should exit until then it should redisplay the menu again and again
Quick tip: switch case with while loop can do that
 
-------------------------------------------------------------------------
*/


'use strict'

const showMovieDetails = function (movieList) {
    for (let i = 0; i < movieList.length; ++i) {
        console.log(`${movieList[i].title.toUpperCase()}(${movieList[i].releaseYear})`);
    }
};

const filterMovie = function (genre) {
    let isMovieFound;
    movieList.forEach(movie => {
        if (movie.genre.toUpperCase() === genre.toUpperCase()) {
            console.log(movie.title);
            isMovieFound = true;
        }
    });

    if (!isMovieFound) {
        console.log(`Movie not found with this ${genre}`);
    }
};


const movieList = [{
    title: "Kalki",
    genre: "Action",
    releaseYear: 2024
},
{
    title: "Pushpa",
    genre: "Action Drama",
    releaseYear: 2022
},
{
    title: "Welcome",
    genre: "Comedy",
    releaseYear: 2010
},
{
    title: "KGF",
    genre: "Action",
    releaseYear: 2020
}
];



let i = 0;
while (i !== 3) {
    console.log(`1: Movie List
2: Filter Movie
3: Exit`);
    let choice = 2;
    switch (choice) {
        case 1:
            showMovieDetails(movieList);
            i = 3;
            break;
        case 2:
            let genreForFilter = "Action";
            filterMovie(genreForFilter)
            i = 3;
            break;
        case 3:
            i = 3;
            break;
        default:
            console.log("Choose valid option between 1-3");
            i = 3;
            break;
    }
}

