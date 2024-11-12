/** 프로토타입  */

// const fruits = ["사과", "바나나", "체리"];
const fruits = new Array("사과", "바나나", "체리")
console.log(fruits)
console.log(fruits.length)
console.log(fruits.includes("사과"))
console.log(fruits.includes("아보카도"))

Array.prototype.getName = function() {
    console.log(this);
};
fruits.getName();

const newArr = [];
newArr.getName();

function getFullName(fname, lname) {
    console.log(`${this.fname} ${this.lname}`)
}

const user = {
    firstName: "9Diin",
    lastName: "Park",
    getFullName: function () {
        return `${this.firstName} ${this.lastname}`;
    }
};

const user2 = {
    firstName: "Neo",
    lastName: "Kim",
};

console.log(user.getFullName);
console.log(getFullName(user2.firstName, user2.lastName));