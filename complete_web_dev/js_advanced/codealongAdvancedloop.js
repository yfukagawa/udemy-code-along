const basket = ['apples', 'oranges', 'grapes'];

// 1
console.log('//1');
for(let i=0; i<basket.length; i++) {
    console.log(basket[i]);
}

// 2
console.log('//2');
basket.forEach(item => {
    console.log(item);
})

// for of
// Iterating - arrays, strings
// only works for iterables = doesn't work with objects
console.log('//3');
for(item of basket) {
    console.log(item);
}
for(item of 'basket') {
    console.log(item);
}

// for in - properties
// Not iterating; 
// enunerating - objects
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 100
}
console.log('//4');
for (item in detailedBasket) {
    console.log(item);
}
for (item in basket) {
    console.log(item);
}