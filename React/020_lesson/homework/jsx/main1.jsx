 var React = require('react');
 var ReactDOM = require('react-dom');
 var users = [{ name: "Anne Montgomery", gender: "Female" },
        { name: "Annie George", gender: "Female" },
        { name: "Gary Butler", gender: "Male" },
        { name: "Lisa Mendoza", gender: "Female" },
        { name: "Marilyn Henry", gender: "Female" },
        { name: "Johnny Tucker", gender: "Male" },
        { name: "Chris Jacobs", gender: "Male" },
        { name: "Benjamin James", gender: "Male" }];
 var Parent = React.createClass({
     getInitialState: function () {
         return {
             listSize: users.length
         }
     },
     handleInput: function (e) {
         this.setState({ listSize: e.target.value })
     },
     render: function () {
         return (
         <div>
         <input type="text" onChange={this.handleInput} />
         <Child num={this.state.listSize}/>
         </div>)
     }
 });

 var Child = React.createClass({
     render: function () {
         var count = +this.props.num;
         return (
                 <ul>
                      {users.map(function (user) {
                          if(count-- > 0)
                              return <li>{user.name + " " + user.gender}</li>
                      })}
                </ul>
            )}
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Parent/>, component);