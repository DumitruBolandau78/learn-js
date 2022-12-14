"use strict"

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'white'
    },
    makefunction: function(){
        console.log('This is a function');
    }
};

// console.log(options.colors.border);

// delete options.name;

// console.log(options);

let counter = 0;

for (let key in options){

    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`svoistvo ${i} imeet znacenie ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`svoistvo ${key} imeet znacenie ${options[key]}`);
        counter++;
    }
}

console.log(counter);
console.log(Object.keys(options).length);

options.makefunction();

const {border, bg} = options.colors;

console.log(border);