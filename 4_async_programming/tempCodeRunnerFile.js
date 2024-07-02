getPromise(1)
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
