let a = 0;
console.log(a);

let obj = {
    number: 5,
    sayNumber: function() {
        say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let names = ['Ivan', 'Ann', 'Ksenia', 'Valdemart'];

let shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);

let answers = ['IvAn', 'AnnA', 'HeLLo'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

console.log(`Пользователь ${name}, ${age} лет`);

function fetchData(data, count = 0) {
    console.log(`Данные: ${data} в количестве ${count}`);
}
fetchData('something');

function max(a, b, ...numbers) {
    console.log(numbers);
}

max(3, 4, 67, 97);

const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];

// const res = Math.max(...arr1, ...arr2);
// console.log(res);

const avatar = 'Photo';
const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
};

// const res = Object.assign({}, user, admin);
const res = {...user, ...admin, avatar};
console.log(res);

const x = 25, y = 10;
const coords = {x, y,
    calcSq() {
        console.log(this.x*this.y);
    }
};

coords.calcSq();

const user = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rights: 'user'
};

const {name: {first, second}, pass, rights} = user;

console.log(first, second, rights);

function connect({
    host = 'localhost',
    port = 3000,
    user = 'default'
} = {}) {
    console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

connect({
    port: 8800,
})
connect()

const numbers = [[3, 5], [6, 6]];

const [[a, b],[c, d]] = numbers;
console.log(c);

const country = {
    name: 'England',
    population: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}

const {z, x, gender: {male: [a1, a2], female: [b1, b2]}} = country;
console.log(a1, b2);