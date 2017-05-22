 var React = require('react');
 var ReactDOM = require('react-dom');
 var timerHandler;
 var Timer = React.createClass({
     getInitialState: function() {
         return {
             timer: 0
         }
     },
     Increment: function () {
         this.setState({ timer: this.state.timer + 1 });
     },
     Decrement: function () {
         this.setState({ timer: this.state.timer - 1 });
     },
     render: function () {
         if(this.setTimer) this.setTimer();
         return (<div>
                    <h1>{this.state.timer}</h1>
                    <button onClick={this.Increment}>+</button>
                    <button onClick={this.Decrement}>-</button>
         </div>)
     }
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Timer />, component);