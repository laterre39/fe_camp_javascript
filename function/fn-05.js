/** 콜백(Callback)
 * 함수는 하나의 데이터로 소괄호를 영고 닫지않으면 하나의 함수 데이터고
 * 소괄호를 열고 닫아야지만 함수를 실핸한다.
 */

const a = () => {
    console.log("A");
};

const b = () => {
    console.log("B");
};

// a(b); b를 콜백 함수라고 부른다 인수 인자로 들어가는 또 다른 함수를 콜백이라 한다.

const c = (callback) => {
    console.log("C");
    callback();
};

const d = () => {
    console.log("D");
};

c(d)

/** ---------------------------------------------------------------------- */

const sum = (a, b) => {
    setTimeout(() => {
        return a + b;
    }, 1000);
};

console.log(sum(1, 2));
console.log(sum(10, 20));


const sum2 = (a, b, c) => {
    setTimeout(() => {
        return c(a, b);
    }, 1000);
};