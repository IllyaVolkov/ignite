var React = require('react');
var ReactDOM = require('react-dom');

var Element = React.createClass({
    getInitialState: function () {
        return {
            style: 'red'
        }
    },
    ChangeStyle: function(e) {
        switch (this.state.style) {
            case 'red': this.setState({style: 'black'}); break;
            case 'black': this.setState({ style: 'red' }); break;
        }
    },
    render: function() { 
        return (
            <div>
                <div id="block" className={this.state.style}></div>
                <button onClick={this.ChangeStyle}>Change style!</button>
            </div>
    )}
});

var component = document.getElementById("component")
ReactDOM.render(<Element/>, component);