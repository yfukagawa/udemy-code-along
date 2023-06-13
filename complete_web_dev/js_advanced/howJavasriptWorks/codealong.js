// asncro
// call stack
console.log('1');
setTimeout(() => {
    console.log('2');
}, 20000)
console.log('3');

// //
// event listener
anElement.addEventListner('click', () => {
    console.log('click')
})
