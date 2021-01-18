'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function() {
    console.log(`Bye ${this.name}`);
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

console.log(ivan, alex);

ivan.hello()
alex.hello()
ivan.exit()