const fun = (a1,b1,c1,d1) => {
    console.log(a1);
}
fun(1,2,3,4,);

//
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
    console.log(value[1] + value[0].replace('username', '')); 
});

//
const es10array = [1,2,3,4,5]
es10array.flat();
console.log(es10array);
const es10array2 = [1,[[2,3],4,5]];
es10array2.flat();
console.log(es10array2);
es10array2.flat(2);
console.log(es10array2);

const es10entries = ['Aaa', 'Bbb',,,,,,,'Ccc'];
es10entries.flat();
console.log(es10entries);

const userEmail = '        sample1@gmail.com';
const userEmail2 = 'sample2@gmail.com        ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

try {
    4 + 5;
} catch {
    console.log('Wrong');
}

