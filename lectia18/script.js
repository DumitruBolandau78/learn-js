"use strict"

let numberOfFilms;

function start(){
    numberOfFilms = prompt('cate filme ai vizionat', '');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
        numberOfFilms = prompt('cate filme ai vizionat', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

start();

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = +prompt('cate stele ii dai?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        }
        else{
            console.log('error');
            i--;
        };
    }
};

rememberMyFilms();



function detectPersonalMovie(){
    if (personalMovieDB.count < 10){
        console.log('Posmotrenno dovolino malo filmov');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('klasicescii zriteli');
    } else if (personalMovieDB.count > 30){
        console.log('Da vi kinoman');
    } else {
        console.log('U got an error');
    }
}

detectPersonalMovie();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`vas liubimii janr po nomeru ${i}`);;
    }
}

writeYourGenres();