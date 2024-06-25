/**
 * Hoisting
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * var은 호이스팅을 막을  수 없지만
 * let 과 const는 이를 막아줄수 있음
 */

console.log("Hello");
console.log("World");

console.log(name); // -> 왜 에러가 안남?
var name = "ssomae";
console.log(name);

// let 과 const도 모두 호이스팅이 된다

console.log(yujin);
let yujin = "안유진";