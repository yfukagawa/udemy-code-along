const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log('forEach', double);

const mapArray = array.map((num) => {
    return num * 2;
});
console.log('map', mapArray);

const filterArray = array.filter(num => {
    return num > 5;
});
console.log('filter', filterArray);

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 29);
console.log('reduce', reduceArray);

// Complete the below questions using this array:
const array2 = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  // const expArray = array2.forEach(
  //   expArray.username = array2.username+'!'
  // );
  // console.log('expArray', expArray);

  class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`My name is ${this.name}. I am a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`${this.name} is casting an attack spell now...`)
    }
}

const wizard1 = new Wizard('Harry', 'Winter Knight');
const wizard2 = new Wizard('Molly', 'Winter Lady');

wizard1.introduce();
wizard2.introduce();
wizard1.play();

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
object2.password = 'newPass';
console.log(object1);
console.log(object2);

var d = [1,2,3,4,5, object2];
var e = d;
var f = [].concat(d);
e.push(65432);
console.log(d);
console.log(e);
console.log(f);
let clone = Object.assign({}, d);
let clone2 = {...d};
let superClone = JSON.parse(JSON.stringify(d))
console.log(clone);
console.log(clone2);
console.log(superClone);

object1 = {name: 'joe', password: 'pass1', rank: 'super'};

console.log('**********');
console.log(object1);
console.log(object2);
console.log(d);
console.log(e);
console.log(f);
console.log(clone);
console.log(clone2);
console.log(superClone);
console.log('**********');

// 
'Test'.padStart(10);
'Test'.padEnd(10);