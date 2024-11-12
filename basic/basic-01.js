/** 식볇자 * 
 *  
 */

/**
 * let: 키워드
 * age: 식별자
 */
let age = 30;

function setAge() {}

const obj = {
    age: 10,
    ["my name"]: "9diin",

};

console.log(obj["my name"]);
console.log(obj.age);

/**
 * 상수: 상수는 변하지 않는 값 대문자로 작성하는 것이 관례
 */
const NATIONALITY = "korea";

/**
 * camelcase: 첫 문자를 소문자로 그 다음 각 단어의 첫글자는 대문자로 setAge
 * cnakecase: 모든 단어를 소문자로 표기 단어사이를 언더스코어로 set_age
 * pascalcase: 모든 단어의 첫 글자가 대문자로 시작 SetAge
 * kebabcase: 모든 단어를 소문자로 표기 단어사이를 하이픈으로 set-age 
 */