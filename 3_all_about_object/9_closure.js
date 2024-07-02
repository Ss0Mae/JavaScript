/**
 * 
 * Closure
 * 
 * A closure is the combination of a function and the lexical
 * enviornment within which that function was declared
 * 
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.
 * 
 * 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure 라고 한다.
 */

function getNumber() {
    var number = 5;
    function innerGetNumber() {
        return number;
    }
    return innerGetNumber();
}
//console.log(getNumber());

function getNumber() {
    var number = 5;
    function innerGetNumber() {
        return number;
    }
    return innerGetNumber;
}

const runner = getNumber();
console.log(runner);
console.log(runner());

/**
 * 1) 데이터 캐싱
 */
function cacheFunction() {
    // 아래 계산이 매우 오래걸린다는 가정을 했을때
    var number = 10 * 100;
    
    function innerCacheFunction(newNumb) {
        return number * newNumb;
    }
    return innerCacheFunction;
}

const runner2 = cacheFunction(); // number값이 계속 저장이되게함.
console.log(runner2(20));
console.log(runner2(30));

/**
 * 
 */

function cacheFunction2() {
    var number = 99;
    function increment() {
        number++;
        return number;
    }
    return increment;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3()); //계속 1씩 증가

/**
 * 3) 정보 은닉
 */

function Idol(name, year) {
    this.name = name;
    var _year = year;

    this.sayNameAndYear = function () {
        return `Hi i am ${this.name}, i born in ${_year}`;
    }
}

const yuJin = new Idol('yujin', 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year); //undefined