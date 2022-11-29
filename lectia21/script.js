'use strict'

const arr = [1, 3, 7, 5, 2];

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} iz masiva ${arr}`);
});
let i = 0;
for (let value of arr){
    console.log(`${i} : ${value} is masiva ${arr}`);
    i++;
};


const obj = {
    anFunction: function(){
        console.log('Hola');
    }
}

obj.anFunction();