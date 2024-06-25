/**
 * 
 * Data Types
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1) number
 * 2) string
 * 3) Boolean
 * 4) Undefined
 * 5) null
 * 6) Symbol
 * 7) Object
 *   function, array, map..
 */
const age = 25;
const temperature = -10;
const pi = 3.14;

console.log(typeof (age));
console.log(typeof (temperature));
console.log(typeof (pi));
console.log("--------");

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("--------");

// String
const codeFactory = '코드팩토리';
console.log(codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 * 1) newLine-> \n
 * 2) tab -> \t
 * 3) \ -> \\
 * 4) `` << 작은따음표가 아니라 물결표시에 있는 `` 영어로 쳐야함 한글로 치면 ₩ 원화표시나옴
 */

const iveYujin = '아이브\n안유진'
console.log(iveYujin);
const iveWonYoung = '아이브\t장원영';
const backSlash = '아이브\\백슬래시';
console.log(iveWonYoung);
console.log(backSlash);

const groupName = 'Ive';
console.log(`${groupName}`);
console.log("--------");
/**
 * Boolean
 */
const isTrue = true;
const isFalse = false;

/**
 * 
 * Undefined
 * 
 * 사용자가 직접 값을 초기화 하지 않았을때 
 * 지정되는 값
 */

/**
 * null
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * 명시적으로 없는값으로 초기화할때 사용된다.
 */

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용한다
 * 다른 프리미티브 값들과 다르게 심볼 함수를
 * 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '2';
console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);
console.log("--------");
// Symbol을 사용하면 유일무이하다.

/**
 * Object 타입
 * 
 * Map
 * key:value 로 이루어짐
 */
const dictionary = {
    red: "빨간색",
    orange: "주황색",
    yellow: "노란색"
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

/**
 * Array
 */