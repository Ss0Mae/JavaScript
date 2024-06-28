/**
 * 
 * Getter and Setter
 */
class IdolModel{
    name;
    year;
    constructor(name,year) {
        this.name = name;
        this.year = year;
    }

    /**
     * Getter의 역할
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     */
    get nameAndYear() { //함수가 아님 키값 처럼 이용
        return `${this.name}-${this.year}`;
    }

    set setName(name) { //set은 무조건 파라미터가 하나 필요
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear); //함수가 아님

yuJin.setName = 'ssomae'; //ssomae가 파라미터로 전달
console.log(yuJin.name);

class IdolModel2{
    #name; //private
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = 'ssomae';
console.log(yuJin2.name);