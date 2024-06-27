/**
 * Object 객체
 */


// key : value pair
let yujin = {
    name: '안유진',
    group: 'IVE',
    dance: function () {
        return `${this.name}이 춤을 춥니다`;
    } // this === 현재 객체
};

console.log(yujin);
console.log(yujin.name);
console.log(yujin.dance());

const key = 'name';
console.log(yujin[key]);

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = 'IVE';

const yujin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
     dance: function () {
        return `${this.name}이 춤을 춥니다`;
    } //
};
console.log(yujin2);
console.log(yujin2.dance());

yujin2['englishName'] = 'An Yu Jin';
console.log(yujin2); //없는 속성이면 알아서 추가됨? const는 변경이 안되지 않나?..

delete yujin2['englishName'];
console.log(yujin2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안에 속성이나 메소드는 변경할 수 있다.
 */
const wonYoung = {
    name: '장원영',
    group: 'IVE'
};
console.log(wonYoung);

wonYoung['group'] = 'SEJONG';
console.log(wonYoung);

/**
 * 모든 키 값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 *모든 밸류값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진'; 
const yujin3 = {
    // name: name,
    name,
};
console.log(yujin3);