 var React = require('react');
 var ReactDOM = require('react-dom');
 var Sum = React.createClass({
     render: function () {
         if (this.props.mode)
             return (<h1>{+this.props.num1 + +this.props.num2}</h1>)
         else
             return (<h1>{this.props.num1 + this.props.num2}</h1>)
     }
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Sum num1="2" num2="3" mode=""/>, component);