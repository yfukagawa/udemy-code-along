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
console.log('map', mapArray);

// filter
const filterArray = array.filter(num => {
    return num > 5;
});
console.log('filter', filterArray);

// reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);
console.log('reduce', reduceArray);


//// Advanced Objects
// reference type
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 15};
// context vs scope
const object4 = {
    aaa: function() {
        console.log(this);
    }
}
// instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Name: ${this.name}, Type: ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`Casting the fire spell now...`)
    }
}

const wizard1 = new Wizard('Harry', 'Winter Knight');
const wizard2 = new Wizard('Molly', 'Winter Lady');

////
// Pass by values vs pass by reference
// passing by values
var a = 5;
var b = 10;
var c = a;

b++;

console.log(a);
console.log(b);
console.log(c);

let object1 = {name: 'joe', password: 'pass1'};
let object2 = object1;
console.log(object1);
console.log(object2);
//passing by reference
object2.password = 'newPass';
console.log(object1);
console.log(object2);

var d = [1,2,3,4,5];
var e = d;
var f = [].concat(d);
e.push(65432);
console.log(d);
console.log(e);
console.log(f);
// shallow cloning vs deep cloning
let clone = Object.assign({}, d)
let clone2 = {...d}
let superClone = JSON.parse(JSON.stringify(d))

////
//  Type Cpercion
== vs ===
loose vs explicit
-0
+0 

////
// ES7
const moo = ['cow', 'bull', 'horn'];
moo.includes('bull');
moo.includes('bird');

const squre = (x)=> x**2
const cube = (x)=> x**3

//ES8
.padStart()
.padEnd()
'Test'.padStart(10);
'Test'.padEnd(10);

const fun = (a1,
    b1,
    c1,
    d1) => {
    console.log(a1);
}
fun(1,2,3,4,); // returns 1

Object.values
Object.entries // key value pair
Object.keys

let obj = {
    username0: 'User0',
    username1: 'User1',
    username2: 'User2',
}
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key])
});
Object.values(obj).forEach(value => {
    console.log(value);
});
Object.entries(obj).forEach(value => {
    console.log(value);
});
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
});

////
// ES10
.flat()
const es10array = [1,2,3,4,5]
es10array.flat();
const es10array2 = [1,[[2,3],4,5]];
es10array2.flat();
const es10entries = ['Aaa', 'Bbb',,,,,,,'Ccc'];
es10entries.flat();

flatmap();

const userEmail = '        sample1@gmail.com';
const userEmail2 = 'sample2@gmail.com        ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

fromEntries
userProfiles = [['Captain', 23], ['Lead', 40], ['Medic', 18]];
Object.fromEntries(userProfiles);

try-catch block 
try {
    4 + 5;
} catch {
    console.log('Wrong');
}