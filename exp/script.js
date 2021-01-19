'use strict';

const person = {
    name: 'Alex',
    tel: '+74444444444',
    parents: {
        mom: 'Nina',
        dad: 'Vova'
    }
};

const clone = JSON.parse(JSON.stringify(person));
clone.name = 'Zhenya';
console.log(person);
console.log(clone);