'use strict';

//filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map

// let answers = ['IvAn', 'AnnA', 'Hello'];

// // const result = answers.map((item) => {  //то же, что ниже
// //     return item.toLowerCase();
// //     });
// const result = answers.map(item => item.toLowerCase());

// console.log(result);

// every/some

// const some = [4, 'qwq', 'dsafkhjs'];

// console.log(some.some(item => typeof(item) == 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] == 'persone');

console.log(newArr);

