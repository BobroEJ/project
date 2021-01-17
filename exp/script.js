'use strict';

const now = new Date();

console.dir(now.getTime());
console.dir(now.valueOf());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} мс`);