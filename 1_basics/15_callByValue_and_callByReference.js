/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primtive 값은 copy by value다.
 * 2) 객체는 copy by referenece다.
 *
 */

let original = 'hello';
let clone = original;

console.log(original);
console.log(clone);

clone += 'ssomae';
console.log(original);
console.log(clone);

console.log("==================");

// Copy by Reference
let originalObj = {
    name: 'An yu Jin',
    group: 'IVE'
};
let cloneObj = originalObj;
// 메모리에서 따로 할당된 객체를 originalObj와 cloneObj가 같은 객체 주소값을 가지고 있음
console.log(originalObj);
console.log(cloneObj);
console.log("==================");

originalObj['group'] = 'sejong';
console.log(originalObj);
console.log(cloneObj); //cloneObj의 그룹도 같이 변한다!

console.log(originalObj === cloneObj); //값이 똑같다고 같다고 판별하는게 아님

let obj1 = {
    name: "ssomae",
    age: "24"
};

let obj2 = {
    name: "ssomae",
    age: "24"
};
console.log(obj1 === obj2); //false


const yujin1 = {
    name: 'An Yu Jin',
    group: 'IVE'
};
const yujin2 = yujin1;
const yujin3 = {
    name: 'An Yu Jin',
    group: 'IVE'
};

console.log(yujin1 === yujin2); // true
console.log(yujin2 === yujin3); //false
console.log(yujin1 === yujin3); //false 

/**
 * Spread Operator => Copy by Value
 */
let yujin4 = {
    ...yujin3,
};
console.log(yujin4 === yujin3);