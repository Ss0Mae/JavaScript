/**
 * Array Methods
 */
let iveMembers = [
    '안유진',
    '레이',
    '리즈',
    '장원영',
    '이서',
    '가을'
];

console.log(iveMembers);

//push() 맨뒤에 추가한 후 길이 리턴
iveMembers.push('ssomae');
console.log(iveMembers);
console.log('==================');

//pop() 맨위에 값 리턴후 삭제
console.log(iveMembers.pop());
console.log(iveMembers);
console.log('==================');

//shift() 맨 앞에 값 리턴 후 삭제
console.log(iveMembers.shift());
console.log(iveMembers);
console.log('==================');

// unshift() 맨 앞에다가 추가
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers)
console.log('==================');

//splice(n,m) n부터 m-1번 까지 삭제후 리턴, 배열이 쪼개짐
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);
console.log('==================');

iveMembers = [
    '안유진',
    '레이',
    '리즈',
    '장원영',
    '이서',
    '가을'
];

console.log(iveMembers);

//concat() push처럼 뒤에서 추가하고, 새로운 배열을 리턴한다. 원본배열에는 변화가 없다.
console.log(iveMembers.concat('ssomae'));
console.log(iveMembers);

//slice(n, m) n부터 m-1번까지 삭제, 원본배열은 변화가 ㅇ벗다
console.log('slice Method');
console.log(iveMembers.slice(0, 3));
console.log(iveMembers)

//spread operator
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers, //배열안에 배열이 저장
];
console.log(iveMembers3);

let iveMembers4 = iveMembers; //배열을 복사
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers, //Spread Operator로 설정하는건 값만 복사하는거라 다름
] === iveMembers)

//join()
console.log(iveMembers.join()); // default == ','
console.log(iveMembers.join(', '))

// sort()
iveMembers.sort(); //Default, 유니코드 값순서대로 정렬
console.log(iveMembers);
console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3
];
console.log(numbers);

// a 와 b를 비교했을때
// 1) a를 b보다 뒤에 둘려면 0보다 큰 숫자를 반환
// 2) a를 b보다 앞에 두려면  0보다 작은 숫자를 반환
// 3) 원래순서를 그대로 두려면 0을 반환
//이 함수가 리턴하는 값이 0보다 작을 경우,  a가 b보다 앞에 오도록 정렬하고,
//이 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬합니다.
//만약 0을 리턴하면, a와 b의 순서를 변경하지 않습니다.
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map() 함수가 리턴하는 값으로 배열의 값을 대체 원본 배열은 변화가 없다.
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브: ${x}`;
    }
    else {
        return x;
    }
}))

//filter() 해당되는 모든값들을 새로운 객체로 리턴
numbers = [1, 8, 7, 3, 6];

console.log(numbers.filter((x) => x % 2 === 0));

//find () 조건에 해당되는 첫번째 값만 바로 리턴
console.log(numbers.find((x) => x % 2 === 0));

//findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

//reduce(a,b) a => 콜백함수 , b => 초기 값
//초기값 0이 p에 입력이된다
// numbers 어레이의 첫번째 값인 1이 n에 입력된다
// p + n 결과값이 반환이된다 1
// 반환된값 1이 다시 p에 입력이된다
// 어레이의 두번째 값인 8이 n에 들어간다
// p+n 에서 9가 반환된다
// 9가 다시 P 에 입력이된다.... 리스트를 모두 순회할때 까지 반복
console.log(numbers.reduce((p, n) => p + n, 0));