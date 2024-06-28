/**
 * Class Keyword
 * 
 * 정보들을 정리해둔것 => 클래스
 * 클래스로 만들어진 객체들 => 인스턴스
 */

class IdolModel{
    name;
    year; //없어도 돌아간다 ㄷㄷ;
    constructor(name,year) { //파라미터와 클래스 멤버의 이름을 같게
        this.name = name; //왼쪽 === 클래스 멤버, 오른쪽 === 파라미터
        this.year = year;
    }

    sayName() { //함수 암묵적 선언
        return `안녕하세요 저는 ${this.name}입니다`;
    }

}

// connstructor - 생성자
const yuJin = new IdolModel('안유진',2003);
console.log(yuJin);
const ray = new IdolModel('레이', 2004);
console.log(ray);

console.log(yuJin.name);
console.log(yuJin.sayName());
console.log(ray.name);

console.log(typeof IdolModel); // function
console.log(typeof yuJin); //Object