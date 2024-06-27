/**
 * Array Methods
 */
const iveMembers = [
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