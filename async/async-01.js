// 동기(Synccronous): 코드가 순차적으로 작동 , 비동기(Asynccronous): 코드가 순차적으로 실행되지 않는

console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3)
}, 1000)
console.log(4);
