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