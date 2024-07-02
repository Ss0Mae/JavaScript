/**
 * Memory Heap & Call stack
 * 
 * 자바스크립트는 싱글스레드 프로그래밍임
 * 메모리힙 하나와 콜 스택 하나를 지니고있음
 * 실행될때마다 스택에 쌓인다.
 */

function one() {
    console.log('run one');
    console.log('run one finished');
}

function two() {
    console.log('run two');
    one();
    console.log('run two finished');
}

function three() {
    console.log('run three');
    two();
    console.log('run three finished');
}
three();

// global -> function three -> function two -> function one