 var React = require('react');
 var ReactDOM = require('react-dom');
 var Sum = React.createClass({
     render: function () {
         var sum = +this.props.var1 + +this.props.var2;
         return (<p>{sum}</p>)
     }
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Sum var1="3" var2="4"/>, component);