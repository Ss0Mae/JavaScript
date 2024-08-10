/**
 * 1. 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
 * 2. 자바스크립트 함수는 함수의 반환값이 될 수 있다.
 * 3. 자바스크립트 함수는 할당명령어의 대상이 될 수 있다. 
 * 4. 자바스크립트 함수는 동일비교의 대상이 될 수 있다.
 */

function foo(arg) {
    arg();
}

function bar() {
    console.log('bar');
}

foo(bar);

/**
 * 1. 기본값 매개변수 default function parameter
 * 2. 나머지 매개변수 Rest parameter
 * 3. arguments 객체
 */

function foo1(arg, ...rest) {
    console.log(rest);
}
foo1(1, 2, 3, 4); // 2, 3, 4 console log

/**
 * 1. 함수 선언문
 * 2. 함수 표현식
 * 3. Function 생성자 함수
 * 4. 화살표 함수 표현식
 */
function foo2() {
    console.log('foo2');
}
foo2();

const foo3 = function () {
    console.log('foo3');
}
foo3();

const foo4 = new Function("console.log('foo4')");
foo4();

const foo5 = () => {
    console.log('foo5')
}
foo5();