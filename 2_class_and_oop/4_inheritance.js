/**
 * Inheritance
 *  부모클래스 === 슈퍼클래스
 * 자식 클래스
*/
class IdolModel{
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel{
    dance() {
        return '여자 아이돌이 춤을 춥니다';
    }
}

class MaleIdolModel extends IdolModel{
    sing() {
        return '남돌이 노래를 합니다';
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(jiMin.sing());

const my = new IdolModel('ssomae', 2000);
console.log(my);
//console.log(my.dance()) //이거 안된다.

console.log(yuJin instanceof IdolModel); //true
console.log(yuJin instanceof FemaleIdolModel); // true
console.log(yuJin instanceof MaleIdolModel); //false