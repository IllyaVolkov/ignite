 var React = require('react');
 var ReactDOM = require('react-dom');
 var Form = React.createClass({
     getInitialState: function () {
         return {
             class: 'green'
         }
     },
     changeClass: function (e) {
         this.setState({ class: this.state.class === 'green'? e.target.value : 'green' })
     },
     render: function () {
         return (<form>
                    <div className={this.state.class}>Some div!</div>
                    Make me red: <input onChange={this.changeClass} type="checkbox" value="red" name="radiobutton" />

                </form>)
     }
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Form/>, component);