////
//var vs let, and const

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
// to change the elements of object or array
// this would return an error
// because a const cannot be redeclared
obj = 5;
// but this would update the target element of this object
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


//// 
// primitives are stored in memory as is
// objects and more comprext variables are not stored as is but its address is stored instead. 

////
//Advanced functions
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc;
// including parameters, everything inside a function is local -> concept of "Scope"

//Closures
//child scope always have access to the parent scope, but parents scope don't have access to their children
// programming to interface

//Currying
const multiply = (aa, bb) => aa * bb;
const curriedMultiply = (aa) => (bb) => aa * bb;
// curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);

// Compose
const compose = (ff, gg) => (aa) => ff(gg(aa));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// Avoiding side effects; functional purity
// determinism

////
// Advanced array
const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log(double);

// map, filter, reduce
// map itelates through = transforms the array
const mapArray = array.map((num) => {
    return num = 2;
});
// with singlle parameter, in theory we can use shorthand version like this (throws error right now):
// const mapArray = array.map(num => num * 2);


console.log(mapArray);