/**
 * Operator
 */

/**
 * 산술연산자
 */

/**
 * 비교연산자
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
console.log(5 == 5);
console.log(5 == '5');

console.log(5 === 5);
console.log(5 === '5');

console.log(5 != 5);
console.log(5 != '5');

console.log(5 !== 5);
console.log(5 !== '5');

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측값 반환
 * &&를 사용했을때 좌측이 false면 좌측값 반환
 * ||를 사용했을때 좌측이 true면 좌측값 반환
 * ||를 사용했을때 좌측이 false면 우측값 반환
 */
console.log(true || 'ssomae');
console.log(false || 'ssomae');
console.log(false && 'ssomae');
console.log(true && 'ssomae');

/** 
 * 지수연산자
 * 
 */
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */

let name;
console.log(name);

name = name ?? 'ssomae'; // null이면 우측값을 넣어라
console.log(name);