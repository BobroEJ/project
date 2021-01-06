'use strict';

if (4 == 9) {
    console.log('ok!');
} else {
    console.log('error!');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Ого!');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error!');
const num = 50;

switch (num) {
    case 49:
        console.log('49');
        break;
    case 100:
        console.log('100');
        break;
    case 50:
        console.log('OK');
        break;
    default:
        console.log('Бывает');
        break;

}