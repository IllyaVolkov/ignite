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
             color: "black"
         }
     },
     handleInput: function (e) {
         this.setState({ listSize: e.target.value, color: getRandomColor() })
     },
     componentDidUpdate: function() {
         //this.setState({ color: getRandomColor()})
         // this won`t work, because changing state inside lifecycle methods calls them again and we have infinite recursion
     },
     render: function () {
         return (
         <div>
         <input type="text" onChange={this.handleInput} />
         <Child num={this.state.listSize} color={this.state.color}/>
         </div>)
     }
 });

 var Child = React.createClass({
     render: function () {
         var count = +this.props.num;
         var color = this.props.color;
         return (
                 <ul>
                     {users.map(function (user) {
                     if(count-- > 0)
                     return <li style={{"color": color}}>{user.name + " " + user.gender}</li>
                     })}
                 </ul>
            )}
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Parent />, component);