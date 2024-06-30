/**
 * Immutable Object
 */

const yuJin = {
    name: '안유진',
    year: 2003,
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);

/**
 * Extensible (확장가능한) 추가 불가능, 삭제는 가능
 */
console.log(Object.isExtensible(yuJin));
yuJin['position'] = 'vocal';
console.log(yuJin);

Object.preventExtensions(yuJin);//에러를 던지지는 않음

yuJin['groupName'] = 'IVE'; 
console.log(yuJin); // { name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }

delete yuJin['position'];
console.log(yuJin);

/**
 * Seal 추가도 X, 삭제도 X 봉인
 * configutable 을 false로 설정하는것과 효과가 똑같음
 */

const yuJin2 = {
    name: '안유진',
    year: 2003,
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2);
console.log(Object.isSealed(yuJin2)); // default => false

Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2)); // false -> true

yuJin2['groupName'] = 'IVE';
console.log(yuJin2);

delete yuJin2['name'];
console.log(yuJin2);

/**
 * Freezed 
 * 
 * 읽기 외에 모든 기능을 불가능하게
 */

const yuJin3= {
    name: '안유진',
    year: 2003,
    get age() {
        return new Date().getFullYear() - this.year;
    },
    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = 'IVE'; //추가 X
console.log(yuJin3);

delete yuJin3['name']; //삭제도 X
console.log(yuJin3);

//속성 변경도 X

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung'])); //하위 객체에게는 적용되지 않는다

