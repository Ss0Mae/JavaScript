/**
 * if and switch
 */

let number = 5;
if (number % 2 === 0) {
    console.log('number는 짝수입니다.');   
}
else {
    console.log('number는 홀수입니다.');
}

const englishDay = 'monday';
let koreanDay;

switch (englishDay) {
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    default:
        break;
}
console.log(koreanDay);