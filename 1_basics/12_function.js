/**
 * function -> 함수
 */
function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

//4 -> arguments, number -> parameter
calculate(4)

function multiply(x, y) {
    console.log(x * y);
}
multiply(2, 4);

function multiply(x, y = 10) {
    console.log(x * y);
}
multiply(2, 4);
multiply(10);

/**
 * Arrow 함수
 * const name = () => { }
 */
const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y; // multiply2 와 동일
console.log(multiply3(4, 4));

const multiply4 = (x) => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z:${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
    return function (y) {
        return function (z) {
            return `x: ${x} y: ${y} z:${z}`;
        }
    }
}

console.log(multiply6(3)(4)(5));

const multiplyTwo = function(x, y){
    return x* y;
}
console.log(multiplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
    console.log(arguments); // arguments의 순서대로 리턴
    return x * y * z;
}
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
} //무한한 파라미터들

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function
(function (x, y) { //정의와 동시에 실행
    console.log(x * y);
})(4, 5);

console.log(typeof multiply);
console.log(multiply instanceof Object); //함수는 오브젝트임