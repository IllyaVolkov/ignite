 var React = require('react');
 var ReactDOM = require('react-dom');
 var Text = React.createClass({
     render: function () {
         return (<p style={{"color": this.props.color, "font-size": this.props.fontSize}}>
                    {this.props.children}
                </p>)
     }
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Text color="red" fontSize="20px">Some text here!</Text>, component);