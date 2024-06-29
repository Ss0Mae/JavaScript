/**
 * Super and Override
 */

class IdolModel{
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    sayHello() {
        return `안녕하세요 ${this.name}입니다`;
    }
}

class FemaleIdolModel extends IdolModel{
    part; //부모 클래스는 모르는 멤버이지만, 생성자에 넣어주고 싶음
    constructor(name, year, part) {
        super(name, year); // 부모 클래스의 생성자 실행
        this.part =part
    }
    //부모 클래스의 메소드도 재정의 가능 하지만 메소드는 super를 이용하지 않고 this를 이용한다.
    sayHello() {
        return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`;
    }
}
// 상속을 받으면 생성자도 같이 상속을받는데
// 생성자를 다시 덮어 쓰고 싶을때 (overrinding)하고 싶을때 이용

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());