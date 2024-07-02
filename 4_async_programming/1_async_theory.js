/**
 * Async theory
 */
// function longWork() {
//     const now = new Date();

//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     while(new Date().getTime() < afterTwoSeconds) {
//         var num = 1;
//         //console.log(num++);
//     }

//     console.log('Done');
// }

// console.log('Hello');
// longWork();
// console.log('World');
//Hello -> 2초 후 World출력
// 2초 간격동안 다른 코드를 작업할 수가 없음
// 이게 동기 프로그래밍임

function longWork() {
    setTimeout(() => { //비동기 프로그래밍으로 설계된 함수
        console.log('Done');
     }, 2000); //앞에는 함수, 뒤에는 타임퀀텀

}

console.log('Hello');
longWork();
console.log('World');
// Hello -> World -> Done 
// 이게 비동기 프로그래밍
//longWork를 실행하면, setTimeWork를 만나서, 쓰레드를 다시 이용할 수 있게됨