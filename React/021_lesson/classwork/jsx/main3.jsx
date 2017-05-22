 var React = require('react');
 var ReactDOM = require('react-dom');
 var timerHandler;
 var Timer = React.createClass({
     getInitialState: function() {
         return {
             timer: 0
         }
     },
     setTimer: function () {
         var obj = this;
         timerHandler = setInterval(function () {
             obj.setState({ timer: obj.state.timer + 1 });
         }, 1000);
     },
     Start: function() {
         var obj = this;
         if (!timerHandler)
             timerHandler = setInterval(function () {
                 obj.setState({ timer: obj.state.timer + 1 });
             }, 1000);
     },
     Stop: function () {
         clearInterval(timerHandler);
         timerHandler = null;
     },
     Reset: function () {
         this.setState({ timer: 0 });
     },
     render: function () {
         if(this.setTimer) this.setTimer();
         this.setTimer = null;
         return (<div>
                    <p>{this.state.timer}</p>
                    <button onClick={this.Reset}>Reset</button>
                    <button onClick={this.Start}>Start</button>
                    <button onClick={this.Stop}>Stop</button>
                </div>)
     }
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Timer />, component);