'use strict';

let numberOfFilms;

function start() {
    numberOfFilms =
    +prompt('Сколько фильмов вы посмотрели за последнее время?', '');

    while (numberOfFilms == '' || numberOfFilms == null || 
        isNaN(numberOfFilms)) {
        numberOfFilms =
        +prompt('Сколько фильмов вы посмотрели за последнее время?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB.count);

let a = null,
    b = null;



function rememberMyFilms() {
    for ( let i = 1; i <= 2;) {
        a = prompt('Какой фильм вы недавно смотрели?', '');
        b = +prompt('Ваша оценка:', '');
        // personalMovieDB.movies[a] = b;
        // i++;
        if (a != '' && a.length <= 50 && a != null && b != '' && b != null) {
            personalMovieDB.movies[a] = b;
            i++;
            //console.log(i)
        }
        
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Маловато');
    } else if (personalMovieDB.count > 9 && personalMovieDB.count <31 ) {
        alert('Норм');
    } else {
        alert('Ого!');
    }
}

//detectPersonalLevel();

// const a = prompt('Какой фильм вы недавно смотрели?', ''),
//       b = +prompt('Ваша оценка:', ''),
//       c = prompt('Какой фильм вы недавно смотрели?', ''),
//       d = +prompt('Ваша оценка:', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
writeYourGenres();
showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const a = prompt(`Ваш любимый жанр № ${i}`);
        if (a != '' && a != null) {
            personalMovieDB['genres'][i-1] = a;
        } else {
            i--;
        }
    }
}