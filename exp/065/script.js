'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше имя');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));
console.log(' 3 4a'.replace(/\D/ig, ''));
// \D
// \W

// \d digits
// \w words
// \s spaces

// i  искать независипо от регистра
// g  искать все вхождения
// m  многострочный режим 

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));

