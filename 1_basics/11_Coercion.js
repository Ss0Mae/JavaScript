/**
 * 타입변환
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

//명시적

let stringAge = age.toString();  
console.log(typeof stringAge, stringAge); // string 32

let test = age + '';
console.log(typeof test, test); // string 32 

console.log('98' + 2); //982
console.log('98' * 2); // 196
console.log('98' - 2); //96

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString, true.toString());
console.log(typeof (Infinity).toString(), Infinity.toString());

//숫자 타입으로 변환

console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');

/**
 * Boolean 타입으로의 변환
 */
console.log(!'x');
console.log(!''); //문자열 안에 문자가 있으면 true고 없으면 false로 판단

console.log(!!0);
console.log(!!'0');

/**
 * 1)아무 글자가 없는 string
 * 2) 값이 없는경우
 * 3) 0
 * 모두 false로 판단한다.
 */