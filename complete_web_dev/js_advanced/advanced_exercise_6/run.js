// [2] === [2] 
// {} === {} 

// const object1 = { a: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { a: 5};
// console.log(object1);
// console.log(object2);
// console.log(object3);
// console.log(object4); 
// object1.a = 4;
// console.log(object1);
// console.log(object2);
// console.log(object3);
// console.log(object4);

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
	}
}

const cow = new Mamal('Shelly', 'cow', 'brown');

console.log(cow)
console.log(cow.sound)