'use strict';

const str = 'test';

console.log(str.toUpperCase());
console.log(str);

const fruit = 'Some fruit m';

console.log(fruit.indexOf('m', fruit.indexOf('m') + 1));

const logg = 'Hello world';

//console.log(logg.slice(-6, -1));

//console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));

console.dir(Number);