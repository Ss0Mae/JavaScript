/**
 * Using function to create objects
 */

function IdolModel(name, year) {
    if (!new.target) {
        return new IdolModel(name, year);
    }
    console.log(this);
    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name}이 춤을 춥니다`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
const yuJin2 = IdolModel('안유진', 2003); // global로 빠짐
console.log(yuJin);
console.log(yuJin.dance());
console.log(global.name);

