var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
var bindActionCreators =  require('redux').bindActionCreators; 
var connect = require('react-redux').connect; 

var dataJSON = require('../data.json');

class List extends React.Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }
    render() { 
        if(this.props.show)
        return (
            <ul>
                {this.props.obj.map(function (item) {
                    return <li>{item.first_name + " " + item.last_name}</li>
                })}
            </ul>
        )
        else return (
            <div></div>
        )} 
}

const countReducer = (state=false, action) => { 
    switch(action.type) {
        case 'SHOW': {
            return true; 
            break;
        }
        default: {
            return state; 
        }
    } 
}

const show = () => {
    console.log('Showed table'); 
    return {
        type: 'SHOW'
    }
} 

 function mapStateToProps(state) {
    return {
       flag: state
   }
 } 

 function matchDispatchToProps(dispatch) {
     return bindActionCreators({
         show: show
     } , dispatch )
 }

 class App extends React.Component {
     render() {   
        return (
            <div>
            <button onClick={() => this.props.show()}>Show list!</button>
            <List  obj={dataJSON} show={this.props.flag}/>
            </div>
    )} 
}

App =  connect(mapStateToProps, matchDispatchToProps)(App); 

let store = createStore(countReducer)

ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>,
  document.getElementById('component')
)
