 var React = require('react');
 var ReactDOM = require('react-dom');
 var timerHandler;

 class Component extends React.Component {

     // props и state определяются через constructor
     constructor(props) {
         super(props);
         this.state = { list: '' };
         this.show = this.show.bind(this);
     }

     show() {
         var object = this.props;
         this.setState({list: (<ul>
                               {Object.keys(object).map((prop) => <li>{prop} : {object[prop]}</li>)} 
                               </ul>)});
     }
     render() {
         if(this.setTimer) this.setTimer();
         this.setTimer = null;
         return (<div>
                    {this.state.list}
                    <button onClick={this.show}>Show props!</button>
                 </div>)
     }
 }
 var component = document.getElementById("component")
 ReactDOM.render(<Component prop1="value1" prop2="value2"/>, component);