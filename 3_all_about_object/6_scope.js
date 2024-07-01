/**
 * Scope
 */

var numberOne = 20;

function levelOne() {
    console.log(numberOne);
}
//levelOne();

function levelOne() {
    var numberOne = 40;
    console.log(numberOne);
}

// levelOne(); //40
// console.log(numberOne); //20

function levelOne() {
    var numberOne = 40;
    function levelTwo() {
        var numberTwo = 99;
        console.log(`levleTwo numberTwo : ${numberTwo}`); // 99
        console.log(`levelTwo numberOne : ${numberOne}`); // 40
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`); //40
}
levelOne();
console.log(numberOne); //20

/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다
 * 
 * Dynamic Scope
 * 실행된 위치가 상위 스코프를 정한다
 */
var numberThree = 3;

function functionOne() {
    var numberThree = 100;
    functionTwo();
}

function functionTwo() {
    console.log(numberThree);
}

functionOne(); // 3

var i = 999;

for (var i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope: ${i}`); // 신기하게도 10임;; var로 선언해서 그럼

i = 999;
for (let i = 0; i < 10; i++){
    console.log(i);
}
console.log(`i in global scope: ${i}`); // 999