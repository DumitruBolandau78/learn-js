"use strict"

const numberOfFilms = +prompt('cate filme ai vizionat', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = +prompt('cate stele ii dai?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = +prompt('cate stele ii dai?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);