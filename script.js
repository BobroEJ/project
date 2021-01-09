'use strict';

let numberOfFilms;



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        numberOfFilms =
        +prompt('Сколько фильмов вы посмотрели за последнее время?', '');
    
        while (numberOfFilms == '' || numberOfFilms == null || 
            isNaN(numberOfFilms)) {
            numberOfFilms =
            +prompt('Сколько фильмов вы посмотрели за последнее время?', '');
        }
    },

    rememberMyFilms: function() {
        for ( let i = 1; i <= 2;) {
            const a = prompt('Какой фильм вы недавно смотрели?', '');
            const b = +prompt('Ваша оценка:', '');
            // personalMovieDB.movies[a] = b;
            // i++;
            if (a != '' && a.length <= 50 && a != null && b != '' && 
            b != null) {
                personalMovieDB.movies[a] = b;
                i++;
                //console.log(i)
            }
            
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Маловато');
        } else if (personalMovieDB.count > 9 && personalMovieDB.count <31 ) {
            alert('Норм');
        } else {
            alert('Ого!');
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const a = prompt(`Ваш любимый жанр № ${i}`);
            if (a != '' && a != null) {
                personalMovieDB['genres'][i-1] = a;
            } else {
                i--;
            }
        }
        const genres = personalMovieDB.genres;
        genres.forEach(function(item, i, genres) {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },

    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        switch (personalMovieDB.privat) {
            case true:
                personalMovieDB.privat = false;
                break;
            case false:
                personalMovieDB.privat = true;
                break;
        }
    }
};

// personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
//personalMovieDB.showMyDB();

console.log(personalMovieDB.privat);










