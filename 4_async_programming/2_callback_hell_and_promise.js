/**
 * callback
 */

// function waitAndRun() {
//     setTimeout(() => {
//         console.log('Done');
//     }, 2000);
// }

// waitAndRun();

// function waitAndRun2() { //가독성이 최악인 경우
//     setTimeout(() => {
//         console.log('1번 콜백 끝');
//         setTimeout(() => {
//             console.log('2번 콜백 끝');
//             setTimeout(() => {
//                 console.log('3번 콜백 끝');
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }

// waitAndRun2();

/**
 * Promise
 */

// const timeoutPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Done');
//     }, 2000); 
// });

// timeoutPromise.then((res) => { //위에서 resolve가 실행되는 시점에 then이 실행된다 res에는 Done이 들어옴
//     console.log('===========');
//     console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
       //if (xxx)
        //resolve('Done');
       reject('Error');
    }, seconds * 1000); 
});

// getPromise(1)
//     .then((res) => {
//         console.log('first then');
//         console.log(res);

//         return getPromise(1);
//     }).then((res) => {
//         console.log('second then');
//         console.log(res);
//     })
//     .catch((res) => {
//         console.log('first catch');
//         console.log(res);
//     })
//     .finally(() => {
//         console.log('==== finallly ==='); // catch then 상관없이 무조건 실행
//     });

Promise.all([ //동시에 실행
    getPromise(1),
    getPromise(2),
    getPromise(1),

]).then((res) => {
    console.log(res);
});

