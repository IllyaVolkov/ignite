var React = require('react');
var ReactDOM = require('react-dom');

var Parent = React.createClass({

    render: function() { 
        return (
            <h1>{this.props.children}</h1>    
    )}
});

var Child = React.createClass({

    render: function() { 
        return (
            <h3>{this.props.children}</h3>    
    )}
}); 
var component = document.getElementById("component")
ReactDOM.render(<Parent>Some h1 text<Child>Some h3 text!</Child></Parent>, component);