'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

//console.log(Object.keys(options).length);
options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     console.log(`Свойство ${key} == ${options[key]}`);
//     counter++;
// }

// let ar = [12, 13, 'aa'];

// for (let i of ar) {
//     console.log(i);
// }

// const sss = 'asldkfjsl';

// for (let i of sss) {
//     console.log(i);
// }
// console.log(5);
