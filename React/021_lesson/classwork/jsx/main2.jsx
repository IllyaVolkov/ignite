 var React = require('react');
 var ReactDOM = require('react-dom');
 var Timer = React.createClass({
     getInitialState: function() {
         return {
             timer: 0
         }
     },
     setTimer: function () {
         var obj = this;
         setInterval(function () {
             obj.setState({ timer: obj.state.timer + 1 });
         }, 1000);
     },
     render: function () {
         if(this.setTimer) this.setTimer();
         this.setTimer = null;
         return (<p>{this.state.timer}</p>)
     }
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Timer/>, component);