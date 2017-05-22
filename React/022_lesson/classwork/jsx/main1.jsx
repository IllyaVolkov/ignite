var React = require('react');
var ReactDOM = require('react-dom');

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

var Output = React.createClass({
    getInitialState: function () {
        return {title, width, height} = options
    },
    render: function() { 
        return (
            <div>{this.state.title} {this.state.width} {this.state.height}</div>
    )}
});

var component = document.getElementById("component")
ReactDOM.render(<Output/>, component);