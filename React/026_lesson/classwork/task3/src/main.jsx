var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var redux = require('redux'); 
var createStore = redux.createStore;
var combineReducers = redux.combineReducers;
var applyMiddleware = redux.applyMiddleware; 
var bindActionCreators = require('redux').bindActionCreators; 
var connect = require('react-redux').connect;
var thunk = require('redux-thunk').default; 

const requestUsers = (state) => {
    return {
        type: 'FETCH_DATA_START',
        payload: 'loading...'
    }
} 

const fetchError = (state) => {
    return {
        type: 'FETCH_DATA_ERROR', 
        payload: 'error'
    }
} 

const receiveUsers = (data) => {
    return {
        type: 'RECEIVE_DATA', 
        payload: data
    }
}

function fetchUsers() {
    return function(dispatch) {
        dispatch(requestUsers()) 
        return fetch('data.json')
        .then(response => response.json()) 
        .then(json => dispatch(receiveUsers(json))
       )
    }
}
const middleware = applyMiddleware(thunk); 

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

const countReducer = (state={data: [], flag: false}, action) => { 
    switch(action.type) {
        case 'SHOW': {
            state.flag = true;
            return  {...state}; 
            break;
        }
        case 'FETCH_DATA_START': {
            state.data = action.payload;
            return  {...state}; 
            break;
        }
        case 'FETCH_DATA_ERROR': {
            state.data = action.payload;
            return  {...state}; 
            break;
        }
        case 'RECEIVE_DATA': {
            state.data = action.payload;
            return {...state}; 
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
        state: state
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
            <button onClick={this.props.show}>Show list!</button>
            <List  obj={this.props.state.data} show={this.props.state.flag}/>
            </div>
    )} 
}

App = connect(mapStateToProps, matchDispatchToProps)(App); 

let store = createStore(countReducer, middleware)

store.dispatch(fetchUsers())
ReactDOM.render(
      <Provider store={store}>
           <App />
      </Provider>,
  document.getElementById('component')
)
