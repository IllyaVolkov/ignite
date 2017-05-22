import React from 'react' ;
import ReactDOM from 'react-dom';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users:["user1", "user2", "user3"], val: ''};
        this.render = this.render.bind(this);
        this.addUser = this.addUser.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }
    addUser() {
        this.state.users.push(this.state.val);
        this.forceUpdate();
    }
    updateValue(e) {
        this.setState({ val: e.target.value});
    }
    render() {
        return (<div>
                 <ul>
                      {this.state.users.map(function (user) {
                          return <li>{user}</li>
                      })}
                </ul>
                <Add handler={this.addUser}/>
                <input type="text"  onChange={this.updateValue} value={this.state.val}/>
                </div>
            )
    }
}

class Add extends React.Component {
    render() {
        return (
                <button onClick={this.props.handler}>Add user</button>
            )
    }
}
var container = document.getElementById('container'); 
ReactDOM.render(<div><List/></div>, container); 