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

var React = require('react');
var ReactDOM = require('react-dom');
class Component extends React.Component {

    // props и state определяются через constructor
    constructor(props) {
        super(props);
        this.state = {array: arr};
    }
    render() {
        return (
            <table>
                <tr>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Age</th>
                     <th>Gender</th>
                     <th>SignUpDate</th>
                     <th>ID</th>
                </tr>
                {   
                    this.state.array.map((user) => (<tr onClick={user.sayHi.bind(user)}>
                                                        <td>{user.firstName}</td>
                                                        <td>{user.lastName}</td>
                                                        <td>{user.age}</td>
                                                        <td>{user.gender}</td>
                                                        <td>{user.signUpDate}</td>
                                                        <td>{user.id}</td>
                                                    </tr>))
                }
            </table>
);
    }
}

var component = document.getElementById('component');
ReactDOM.render(<Component />, component);