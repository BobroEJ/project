'use strict';

const numberOfFilms = +prompt('how much?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB.count);

const a = prompt('film1?', ''),
      b = +prompt('rating', ''),
      c = prompt('film2?', ''),
      d = +prompt('rating', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
