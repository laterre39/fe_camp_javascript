class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`
    };

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    };
};

const user1 = new User("9Diin", "Park");
console.log(user1);

user1.firstName = "Neo";
console.log(user1.getFullName());

class NewUser {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    };
    set fullName(value) {
        console.log(value);
        this.firstName = value.split(" ")[0];
        this.lastName = value.split(" ")[1];
    }
};

const user2 = new NewUser("9Diin", "Park");
console.log(user2.fullName);

user2.lastName = "Kim";
console.log(user2.fullName);

user2.fullName = "Neo Kim";