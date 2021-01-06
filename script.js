'use strict';

const numberOfFilms = 
    +prompt('Сколько фильмов вы посмотрели за последнее время?', '');

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

if (personalMovieDB.count < 10) {
    alert('Маловато');
} else if (personalMovieDB.count > 9 && personalMovieDB.count <31 ) {
    alert('Норм');
} else {
    alert('Ого!');
}

// const a = prompt('Какой фильм вы недавно смотрели?', ''),
//       b = +prompt('Ваша оценка:', ''),
//       c = prompt('Какой фильм вы недавно смотрели?', ''),
//       d = +prompt('Ваша оценка:', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
