 var React = require('react');
 var ReactDOM = require('react-dom');
 var Form = React.createClass({
     render: function () {
         return (<form>
                    <input type="text" name="name" />
                    <input type="text" name="login" />
                    <input type="submit" value="submit!" />
                </form>)
     }
 });
 var component = document.getElementById("component")
 ReactDOM.render(<Form/>, component);