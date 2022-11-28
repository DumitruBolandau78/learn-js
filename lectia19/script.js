"use strict"

function learnJS(lang, callback){
    console.log(lang);
    callback();
}

learnJS('JavaScript', function(){
    console.log('Am terminat lectia!');
});