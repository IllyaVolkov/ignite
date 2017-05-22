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

const countReducer = (state={table: false, input: '', data: dataJSON}, action) => { 
    switch(action.type) {
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

 function mapStateToProps(state) {
    return {
        flag: state.table,
        text: state.input,
        data: state.data
   }
 } 

 function matchDispatchToProps(dispatch) {
     return bindActionCreators({
         table: showTable,
         list: showList,
         add: add,
         remove: remove,
         change: change
     } , dispatch )
 }

 class App extends React.Component {
     changeHandler(e) { 
         this.props.change(e.target.value); 
     }
     render() {
        let handler =  this.changeHandler.bind(this);
        return (
            <div>
            <button onClick={() => this.props.table()}>Table!</button>
            <button onClick={() => this.props.list()}>List!</button>
            <List  obj={this.props.data} show={this.props.flag}/>
            <input type="text" onChange={handler} value={this.props.text} />
            <button onClick={() => this.props.add(this.props.text, this)}>ADD</button>
            <button onClick={() => this.props.remove(this.props.text, this)}>REMOVE</button>
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
