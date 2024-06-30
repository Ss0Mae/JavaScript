/**
 * 
 * Property Attribute
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만, 다른 값을 가져오거나
 *                      설정할때 호출되는 함수로 구성된 프로퍼티
 *                      예를 들면 getter 와 setter
 */

const yuJin = {
    name: '안유진',
    year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
// { value: 2003, writable: true, enumerable: true, configurable: true }

/**
 * 1) value : 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부 false로 설정하면, 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for ..in 등을 사용할 수 있으면 true를 반환함
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false일 경우 프로퍼티 삭제나 어트리뷰트
 *                   변경이 금지된다. 단 writable이 true인 경우
 *                  값 변경과 writable을 변경하는건 가능하다.
 *                  false에서 true는 안됨
 */

console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
    name: 'ssomae',
    year: 2003,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
};

console.log(yuJin2.age);
yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

// yuJin2['height'] = 172;
// console.log(yuJin2);
// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 180;
console.log(yuJin2);

Object.defineProperty(yuJin2, 'height',{
    writable: false
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
console.log('-------------------');
yuJin2.height = 172; //오류는 나지 않지만 값이 변경되지 않는다.
console.log(yuJin2); // { name: 'ssomae', year: 1992, age: [Getter/Setter], height: 180 }

/**
 * Enumerable
 */
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
    console.log(key);
} //name year age height

Object.defineProperty(yuJin2, 'name', {
    enumerable: false
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
console.log('-------------------');
console.log(yuJin2);
for (let key in yuJin2) {
    console.log(key);
}// year age height

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false, // 재정의 불가해짐
// });

Object.defineProperty(yuJin2, 'height', {
    value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
