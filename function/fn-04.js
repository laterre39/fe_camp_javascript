/** 화살표 함수
 * 화살표 함수는 return 키워드로 로직이 시작되고 return 키워드와 중괄호를 제거하여 사용할 수 있다.
 * 매개변수를 가질 수 있는데 만약 한개마나 있으면 소괄호를 생략 가능하다.
 */

const sum1 = (a, b) => {
    return a + b;
};

const sum2 = (a, b) => a + b;

console.log(sum1(1, 2));
console.log(sum2(10, 20));

const a = x => {
    console.log("x:", x);
    return x * x;
};

const b = () => {
    return { value: 1 };
};

const c = () => {
    value: 1;
} // 중괄호로 사용된 부분이 마치 함수의 블록처럼 보이기 때문에 자바스크립트 문법으로 이해할 수 없는 코드로 오류발생

const d = () => ({ value: 1});