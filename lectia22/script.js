'use strict'

const obj = {
    a: 10,
    b: 3,
    c : {
        x: 12,
        y: 15
    }
}

const copyObj = JSON.parse(JSON.stringify(obj));

copyObj.a = 21;
copyObj.c.x = 51;

console.log(obj);
console.log(copyObj);