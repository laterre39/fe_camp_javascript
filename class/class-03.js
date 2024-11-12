function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
};

const user = new User("9Diin", "Park");
const user2 = new User("Neo", "Kim");

class NewUser {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    };
};

const user3 = new NewUser("9Diin", "Park");
const user4 = new NewUser("Neo", "Kim");
console.log(user3)
console.log(user4)
