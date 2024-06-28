/**
 * try .. catch
 * 
 * 1) 발생시킬때 -> 던진다고한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고한다. (catch)
 */
function runner() {
    try {
     console.log('Hello');
    
    throw new Error('Error Detection');
    console.log('ssomae');   
    }
    catch (e) { //에러가 발생하면 바로 실행
        console.log('----catch----');
    }
    finally { //트라이에서 에러가 나든 말든 무조건 실행
        console.log('----finally----');
    }
}
//에러를 throw하면 catch로 이동
runner();