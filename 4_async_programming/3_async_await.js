/**
 * Async / Await
 */
const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Done');
        reject('error');
    }, seconds * 1000)
});

async function runner() { //비동기 프로그래밍을 편하게 할 수 잇음
    try {
        const result = await getPromise(1);
        console.log(result);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result2);
    } catch (e) {
        console.log(e);
    }
    finally {
        console.log("finally");
    }
   
}

runner();