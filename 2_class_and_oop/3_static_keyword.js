/**
 * Static Keyword
 */
class IdolModel{
    name;
    year;
    static groupName = 'IVE'; // static -> 인스턴스가 아니라 클래스 자체에 직접 귀속 new 할당 X
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    static returnGroupName() {
        return 'IVE';
    }
}

const yuJin = new IdolModel('ssomae', 2000);
console.log(yuJin);

console.log(IdolModel.groupName); 
console.log(IdolModel.returnGroupName());

/**
 * Factory Constructor
 */
class IdolModel2 {
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    static fromObject(object) {
        return new IdolModel2(
            object.name,
            object.year
        );
    }

    static fromList(list) {
        return new IdolModel2(
            list[0],
            list[1]
        );
    }
}

const yuJin2 = IdolModel2.fromObject({
    name: 'ssomae',
    year: 2000
});
console.log(yuJin2);

const wonYoung = IdolModel2.fromList( //static을 이용하여 new를 이용하지 않아도 객체를 생성가능
    [
        '장원영',
        2003
    ]
);
console.log(wonYoung);