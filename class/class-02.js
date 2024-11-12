function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const user = new User("9Diin", "Park");
console.log(user);

const user2 = new User("Neo", "Kim");
console.log(user2);

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

console.log(user.getFullName);
console.log(user2);