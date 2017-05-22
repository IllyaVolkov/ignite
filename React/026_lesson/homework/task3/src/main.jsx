var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var redux = require('redux'); 
var createStore = require('redux').createStore;
var combineReducers = redux.combineReducers;
var applyMiddleware = redux.applyMiddleware;
var bindActionCreators =  require('redux').bindActionCreators; 
var connect = require('react-redux').connect;
var thunk = require('redux-thunk').default;

var router = require('react-router');
var Router = router.Router; 
var Route = router.Route; 
var Link = router.Link; 
var IndexRoute = router.IndexRoute; 
var hashHistory = router.hashHistory; 

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
                    return <li>{item}</li>
                })}
            </ul>
        )
        else return (
            <table>
                {this.props.obj.map(function (item) {
                    return <tr><td>{item}</td></tr>
                })}
            </table>
        )} 
}

const countReducer = (state={table: false, input: '', data: [], rating: 0, count: 0, curr: 0}, action) => { 
    switch(action.type) {
        case 'FETCH_DATA_START': {
            state.data = [];
            return  {...state}; 
            break;
        }
        case 'FETCH_DATA_ERROR': {
            state.data = [];
            return  {...state}; 
            break;
        }
        case 'RECEIVE_DATA': {
            state.data = action.payload;
            return {...state}; 
            break;
        }
        case 'TABLE': {
            state.table = true;
            return {...state}; 
            break;
        }
        case 'LIST': {
            state.table = false;
            return {...state};
            break;
        }
        case 'CHANGE': {
            state.input = action.value; 
            return {...state};
            break;
        }
        case 'UPDMARK': {
            state.curr = action.value; 
            return {...state};
            break;
        }
        case 'RATE': {
            if(state.curr >= 0 && state.curr <= 5) {
                state.count++;
                state.rating += (state.curr - state.rating) / state.count; 
            }
            return {...state};
            break;
        }
        case 'ADD': {
            state.data.push(action.value);
            state.data = [...state.data];
            return {...state};
            break;
        }
        case 'REMOVE': {
            var index = state.data.indexOf(action.value);
            if (index != -1)
            state.data.splice(index, 1);
            state.data = [...state.data];
            return {...state};
            break;
        }
        default: {
            return state; 
        }
    } 
}

const showTable = () => {
    return {
        type: 'TABLE'
    }
}
const showList = () => {
    return {
        type: 'LIST'
    }
}
const add = (text, component) => {
    return {
        type: 'ADD',
        value: text,
        obj: component
    }
} 
const remove = (text, component) => {
    return {
        type: 'REMOVE',
        value: text,
        obj: component
    }
}
const change = (text) => {
    return {
        type: 'CHANGE', 
        value: text
    }
}

const rate = () => {
    return {
        type: 'RATE', 
    }
}

const updMark = (mark) => {
    return {
        type: 'UPDMARK', 
        value: +mark
    }
}

 function mapStateToProps(state) {
    return {
        flag: state.table,
        text: state.input,
        data: state.data,
        rating: state.rating
   }
 } 

 function matchDispatchToProps(dispatch) {
     return bindActionCreators({
         table: showTable,
         list: showList,
         add: add,
         remove: remove,
         change: change,
         rate: rate,
         updMark: updMark
     } , dispatch )
 }

 class App extends React.Component {
     render() {
        return (
            <div>
            <button onClick={() => this.props.table()}>Table!</button>
            <button onClick={() => this.props.list()}>List!</button>
            <List  obj={this.props.data} show={this.props.flag}/>
            </div>
    )} 
 }

class Menu extends React.Component {
    render() {
        return (<div>
                <Link to="/"><button>Home</button></Link>
                <Link to="/edit"><button>Edit</button></Link>
                <Link to="/about"><button>About</button></Link>
                <hr/>
                {this.props.children}
            </div>)
    }
}

class Edit extends React.Component {
    changeHandler(e) { 
        this.props.change(e.target.value); 
    }
    render() {
        let handler =  this.changeHandler.bind(this);
        return (<div>
                <input type="text" onChange={handler} value={this.props.text} />
                <button onClick={() => this.props.add(this.props.text, this)}>ADD</button>
                <button onClick={() => this.props.remove(this.props.text, this)}>REMOVE</button>
                </div>)
    }
}

class About extends React.Component {
    changeHandler(e) { 
        this.props.updMark(e.target.value); 
    }
    render() {
        let handler =  this.changeHandler.bind(this);
        return(
        <div>
        <p>Rating: {this.props.rating}</p>
        <input type="text" onChange={handler} value={this.props.mark} />
        <button onClick={() => this.props.rate()}>RATE</button>
        </div>
        )
    }
}

App =  connect(mapStateToProps, matchDispatchToProps)(App); 
Edit =  connect(mapStateToProps, matchDispatchToProps)(Edit); 
About =  connect(mapStateToProps, matchDispatchToProps)(About); 

let store = createStore(countReducer, middleware)
store.dispatch(fetchUsers())
ReactDOM.render(
      <Provider store={store}>
           <Router history={hashHistory}>
                <Route path="/" component={Menu}>
                   <IndexRoute component={App} />
                   <Route path="edit" component={Edit} />
                   <Route path="about" component={About} />
                </Route>
           </Router>
      </Provider>,
  document.getElementById('component')
)
