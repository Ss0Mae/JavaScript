/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++){
    console.log(i + 1);
}

let square = '';

for (let i = 0; i < 6; i++){
    for (let j = 0; j < 6; j++){
        square += '*';
    }
    square += '\n';
}
console.log(square);

// for...in -> key값의 접근
const my = {
    name: 'ssomae',
    age: 24,
};
for (let value in my) {
    console.log(value);
}

const array = ['A', 'B', 'C', 'D', 'E'];
for (let key in array) {
    //console.log(key);
    console.log(`${key}:${array[key]}`);
}


//for ...of -> value값의 접근
for (let value of array) {
    console.log(value);
}