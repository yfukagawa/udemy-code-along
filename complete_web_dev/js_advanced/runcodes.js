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
  const expArray = array2.forEach(
    expArray.username = array2.username+'!'
  );
  console.log('expArray', expArray);