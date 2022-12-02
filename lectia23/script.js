'use strict'

const oldObj = {
    health: 400,
    armor: 100,
    fct: () => {
        console.log('hello');
    }
}

const newObj = Object.create(oldObj);

console.log(newObj.armor);

oldObj.fct();