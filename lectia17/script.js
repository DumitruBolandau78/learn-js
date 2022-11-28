'use strict'

const str = 'Dima mananca un mar';

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.slice(3, 10)); //afiseaza de la 3 la 10
console.log(str.substring(-3, 10)); // la fel ca slice doar ca ia si valori negative ce rezulta ca 0 prima valoare
console.log(str.substr(5, 100));  // incepand de la litera 5 va afisa 3 urmatoarele 3 litere

const num = 13.4;

console.log(Math.round(num)); //Math are mai multe optiuni ca random, cea mai mare cifra etc

const test = '14.5px'
console.log(parseFloat(test));
console.log(parseInt(test));