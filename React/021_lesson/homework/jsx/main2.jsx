 var React = require('react');
 var ReactDOM = require('react-dom');
 var timerHandler;
 var Timer = React.createClass({
     getInitialState: function () {
         return {
             result: 0
         }
     },
     Sum: function () {
         this.setState({ result: +this.state.val1 + +this.state.val2 });
     },
     Diff: function () {
         this.setState({ result: +this.state.val1 - +this.state.val2 });
     },
     Mult: function () {
         this.setState({ result: +this.state.val1 * +this.state.val2 });
     },
     Div: function () {
         this.setState({ result: +this.state.val1 / +this.state.val2 });
     },
     updateValue1: function (e) {
         this.setState({ val1: e.target.value});
     },
     updateValue2: function (e) {
         this.setState({ val2: e.target.value });
     },
     render: function () {
         if(this.setTimer) this.setTimer();
         return (<div>
                    Result: <h1>{this.state.result}</h1>
                    <input type="text" onChange={this.updateValue1} value={this.state.val1} />
                    <input type="text" onChange={this.updateValue2} value={this.state.val2} />
                    <br/>
                    <button onClick={this.Sum}>+</button>
                    <button onClick={this.Diff}>-</button>
                    <button onClick={this.Mult}>*</button>
                    <button onClick={this.Div}>/</button>
         </div>)
     }
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Timer />, component);