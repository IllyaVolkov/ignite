 var React = require('react');
 var ReactDOM = require('react-dom');
 var timerHandler;
 var Timer = React.createClass({
     getInitialState: function () {
         return {
             errorName: 'Everything is clear!',
             errorEmail: 'Everything is clear!',
             errorPhone: 'Everything is clear!',
             errorMessage: 'Everything is clear!'
         }
     },
     checkName: function (e) {
         var regexp = /^[a-zA-Z_ ]+$/;
         if (e.target.value.search(regexp) == -1) {
             this.setState({ errorName: 'Error!' });
         } else this.setState({ errorName: 'Everything is clear!' });
     },
     checkEmail: function (e) {
         var regexp = /^[a-zA-Z_]+@[a-z]+.[a-z]+$/;
         if (e.target.value.search(regexp) == -1) {
             this.setState({ errorEmail: 'Error!' });
         } else this.setState({ errorEmail: 'Everything is clear!' });
     },
     checkPhone: function (e) {
         var regexp = /^[0-9]+$/;
         if (e.target.value.search(regexp) == -1) {
             this.setState({ errorPhone: 'Error!' });
         } else this.setState({ errorPhone: 'Everything is clear!' });
     },
     checkMessage: function (e) {
         var regexp = /^[a-zA-Z_ 0-9]+$/;
         if (e.target.value.search(regexp) == -1) {
             this.setState({ errorMessage: 'Error!' });
         } else this.setState({ errorMessage: 'Everything is clear!' });
     },
     render: function () {
         if(this.setTimer) this.setTimer();
         return (<form>
                    Name: <input type="text" onChange={this.checkName}/>{this.state.errorName}
                    <br />
                    Email: <input type="text" onChange={this.checkEmail }/>{this.state.errorEmail}
                    <br />
                    Phone number: <input type="text" onChange={this.checkPhone }/>{this.state.errorPhone}
                    <br />
                    Message: <input type="text" onChange={this.checkMessage }/>{this.state.errorMessage}
                    <br />
         </form>)
     }
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Timer />, component);