 var React = require('react');
 var ReactDOM = require('react-dom');
 var Header = React.createClass({
     render: function() {
         return (<h1>{this.props.children}</h1>)
     }
 });
 var header = document.getElementById("header")
 ReactDOM.render(<Header>Hello, world!</Header>, header);