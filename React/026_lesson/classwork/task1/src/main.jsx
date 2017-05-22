var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
var bindActionCreators =  require('redux').bindActionCreators; 
var connect = require('react-redux').connect; 

const countReducer = (state='text', action) => { 

    switch(action.type) {
        case 'CHANGE': {
            return action.payload; 
            break;
        }
        default: {
            return state; 
        }
    } 

}

var actions = {};

actions.change = (text) => {
    return {
        type: 'CHANGE', 
        payload: text
    }
}

class Element extends React.Component {
    constructor() {
        super()
        this.changeHandler =  this.changeHandler.bind(this)
    }
    changeHandler(e) { 
        this.props.change(e.target.value); 
    }
    render() {   
        let handler =  this.changeHandler.bind(this);
        return (
            <div>
                <h1>{this.props.text}</h1>
                <input type="text" onChange={handler} value={this.props.text} />
            </div>
    )} 
}

 function mapStateToProps(state) {
    return {
       text: state
   }
 } 

 function matchDispatchToProps(dispatch) {
     return bindActionCreators({
         change: actions.change
     } , dispatch )
 }

 Element =  connect(mapStateToProps, matchDispatchToProps)(Element);

let store = createStore(countReducer)

ReactDOM.render(
      <Provider store={store}>
           <Element />
      </Provider>,
  document.getElementById('component')
)
