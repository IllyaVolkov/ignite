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
 function getRandomColor() {
     var h = Math.floor(Math.random() * (255 - 1) + 1);
     var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
     var l = '50%';
     var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
     return randomColor;
 }
 var Parent = React.createClass({
     getInitialState: function () {
         return {
             listSize: users.length,
             color: "black",
             table: false
         }
     },
     handleInput: function (e) {
         this.setState({ listSize: e.target.value })
     },
     componentDidUpdate: function() {
         this.setState({ color: getRandomColor()})
     },
     changeView: function () {
         this.setState({ table: !this.state.table })
     },
     render: function () {
         return (
         <div>
         Table?: <input onChange={this.changeView} type="checkbox" name="radiobutton" />
         <input type="text" onChange={this.handleInput} />
         <Child num={this.state.listSize} color={this.state.color} view={this.state.table} />
         </div>)
     }
 });

 var Child = React.createClass({
     render: function () {
         var count = +this.props.num;
         var color = this.props.color;
         if (!this.props.view)
             return (
                     <ul>
                     {users.map(function (user,thisArg) {
                             if(count-- > 0)
                                 return <li style={{"color": color}}>{user.name + " " + user.gender}</li>
                         })}
                 </ul>
                );
        else return (
                 <table>
                     {users.map(function (user) {
                     if(count-- > 0)
                         return <tr style={{"color": color}}><td>{user.name}</td><td>{user.gender}</td></tr>
                     })}
                 </table>
            );}
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Parent />, component);