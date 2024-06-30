/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다. (자동적으로)
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
//prototype => __proto__ 타입이 참조하는 객체
console.log(testObj.__proto__);

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}
console.log(IdolModel.prototype);

console.dir(IdolModel.prototype, {
    showHidden: true,
});

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;
    
    this.sayHello = function () {
        return `${this.name} say Hello`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello() === wonYoung2.sayHello()); //false

console.log(yuJin2.hasOwnProperty('sayHello')); //유진2 객체안에서만 가지고 있냐

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function () {
    return `${this.name} say Hello`;
}// prototype 내부에서 메소드 정의

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2002);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello); //true

console.log(yuJin3.hasOwnProperty('sayHello')); //false
console.log('=========================');

IdolModel3.sayStaticHello = function () {
    return 'I am Static method';
}
console.log(IdolModel3.sayStaticHello());

/**
 * Overrriding
 */
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return 'I am Instance Method';
    }
}
IdolModel4.prototype.sayHello = function () {
    return 'I am ProtoType Method';
}

const yuJin4 = new IdolModel4('안유진', 2003);
console.log(yuJin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function () {
    return `${this.name}이 인사를 합니다 `;
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;
    this.dance = function () {
        return `${this.name}이 춤을 춥니다`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto___ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype)
//console.log(ray.sayHello());

Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel); //false setProtoType으로 변경을했기 때문에
console.log(ray.constructor === IdolModel);
console.log(gaEul.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); //연결이 끊겼다
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype); //여기로 연결됨
console.log(FemaleIdolModel.prototype === IdolModel.prototype);


FemaleIdolModel.prototype = IdolModel.prototype; //함수의 프로토 타입의 변경
const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype); //true