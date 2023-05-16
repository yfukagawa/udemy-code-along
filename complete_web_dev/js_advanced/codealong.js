const player = 'bobby';
let experience = 100;
let wizardlevel = false;

if (experience > 90) {
    let wizardlevel = true;
    console.log('inside',wizardlevel);
}
console.log('outside',wizardlevel);

//// 

const aa = function() {
    console.log("a")
}

//// 

const obj = {
    player: 'bobby',
    experience: 100,
    wizardlevel: false,
}
// to change the elements
// this would return an error
obj = 5;
// but this would update the target element
obj.experience = 5;

////

// Destructuring
const obj1 = {
    player1: 'bobby',
    experience1: 100,
    wizardlevel1: false,
}

// do this
const { player1, experience1} = obj1;
let { wizardlevel1 } = obj1;

// instead of
// const player1 = obj1.player1;
// const experience1 = obj1.experience1;
// let wizardlevel1 = obj1.wizardlevel1;


////
//dynamically declaring object property
const name = 'Jon Doe';

const resp = {
    [name]: 'hello',
    [player]: 'hello there',
}

const a1 = "Smith";
const a2 = true;
const a3 = {};
const obj2 = {
    a1, a2, a3
}

////
//Template Strings
const person = "Joe";
const jobclass = "knight";
const rank = "A";
//now creating a string by using the back-ticks ( ` ).
const intro = `${person} is a rank ${rank} ${jobclass} currently.`

//default arguments
function greeting (name='', action='buy') {
    return `Hello ${name}! What would you like to ${action} today?`
}
//result running "greeting()": 'Hello ! What would you like to buy today?'

////
// Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
// run this: sym2 === sym3
// result is: false

////
// arrow functions
// replace below:
function add(a, b) {
    return a + b;
}
// by using:
const add = (a, b) => a + b;