'use strict';

// To String

// 1)
console.log(typeof(String(null)));

// 2)
console.log(typeof(5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);
console.log(`https://vk.com/catalog/${num}`);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'23'));

// 3)
console.log(typeof(parseInt('15px', 10) ));

// To boolean

//0. '', null, undefined, NaN;

// 1)
let switcher = null;
switcher = 1;
if (switcher) {
    console.log('Working...');
}

console.log(typeof(Boolean('12')));

console.log(!!'asdf');