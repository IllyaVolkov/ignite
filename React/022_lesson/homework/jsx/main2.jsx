class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }

    sayHi() {
        alert("Hello, my  name is " + this.fullName());
    }
}


class User extends Person {
    constructor(firstName, lastName, age, gender, signUpDate = 0) {
        super(firstName, lastName, age, gender);
        this.signUpDate = signUpDate;
        this.id = User.prototype.count++;
    }
}

User.prototype.count = 0;

var arr = [];

for (var i = 0; i < 10; i++){
    arr.push(new User());
}

console.log(arr[0].id);
console.log(arr[9].id);