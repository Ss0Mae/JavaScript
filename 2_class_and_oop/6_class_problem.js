/**
* 클래스 강의를 끝낸기념 문제

* 1) Country 클래스는 나라 이름과 나라에 해당되는 아이돌 그룹정보를
    리스트로 들고있다. (name• 프로퍼티, idolGroups 프로퍼티)
* 2) IdolGroup 클래스는 아이돌 그룹 이름 정보와 멤버 정보를 리스트로 들고있다.
    (name 프로퍼티, members 프로퍼티)
  3) Idol 클래스는 아이돌 이름과 출생년도 정보를 들고있다.
     (name 프로퍼티, year 프로퍼티)
  4) MaleIdoL 클래스는 IdoL 클래스와 동일하게 name, year 프로퍼티가 존재한다 
    추가로 sing() 함수를 실행하면 ${이름}이 노래를 합니다.
    라는 스트링을 반환해준다.
  5) FemaleIdoL 클래스는 IdoL 클래스와 동일하게 name, year 프로퍼티가 존재한다.
    추가로 dance() 함수를 실행하면 ${이름}이 춤을 춥니다.
    라는 스트링을 반환해준다.
* 아래 정보가 주어졌을때 위 구조로 데이터를 형성해보라.
* map() 함수를 잘 활용하면 좋다.
*/
const iveMembers = [
    {
        name: '안유진',
        year: 2003,
    },
    {
        name: '가을',
        year: 2002,
    },
    {
        name: '이서',
        year: 2007,
    },
    {
        name: '레이',
        year: 2004,
    },
    {
        name: '리즈',
        year: 2003,
    },
    {
        name: '장원영',
        year: 2002,
    },
];

const btsMembers = [
    {
        name: '진',
        year: 1992,
    },
    {
        name: '슈가',
        year: 1993,
    },
    {
        name: '제이홉',
        year: 1994,
    },
    {
        name: '지민',
        year: 1995,
    },
    {
        name: '뷔',
        year: 1995,
    },
    {
        name: '정국',
        year: 1997,
    },
];
class Country {
    name;
    idolGroups;
    constructor(name, idolGroups) {
        this.name = name;
        this.idolGroups = idolGroups;
    }
}

class IdolGroup{
    name;
    members;
    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}

class Idol{
    name;
    year;
    constructor(name,year) {
        this.name = name;
        this.year = year;
    }
}

class MaleIdol extends Idol{
    sing() {
        return `${this.name}이 노래를 합니다`;
    }
}

class FemaleIdol extends Idol{
    dance() {
        return `${this.name}이 춤을 춥니다`;
    }
}

const cIveMembers = iveMembers.map(
    (x) => new FemaleIdol(x['name'], x['year']),
);
console.log(cIveMembers);

const cBtsMembers = btsMembers.map(
    (x) => new MaleIdol(x['name'], x['year']),
);
console.log(cBtsMembers);

const iveGroup = new IdolGroup(
    '아이브',
    cIveMembers,
);

const btsGroup = new IdolGroup(
    'BTS',
    cBtsMembers,
);

console.log(iveGroup);
console.log(btsGroup);

const korea = new Country(
    '대한민국',
    [
        iveGroup,
        btsGroup,
    ],
);
console.log(korea);