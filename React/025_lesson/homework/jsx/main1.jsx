var React = require('react');
var ReactDOM = require('react-dom');

var Dispatcher = require('flux').Dispatcher;
var EventEmitter = require('events').EventEmitter;

var dispatcher = new Dispatcher;
var timerHandler;

class AppStore extends EventEmitter {
    handleActions(action) {
        switch (action.type) {
            case 'add': {
                action.target.state.records.push(action.target.state.val);
                action.target.forceUpdate();
                break;
            }
            case 'delete': {
                var index = action.target.state.records.indexOf(action.target.state.val);
                action.target.state.records.splice(index, 1);
                action.target.forceUpdate();
                break;
            }
            case 'update': {
                action.target.setState({ val: action.object.target.value });
                break;
            }
        }
    }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { records: ["to do homework", "to do all react lessons", "to do project"], val: '' };
        this.render = this.render.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    clickHandler(eventType) {
        var objRef = this;
        return function () {
            dispatcher.dispatch({
                type: eventType,
                target: objRef
            })
        }
    }
    changeHandler(eventType) {
        var objRef = this;
        return function (e) {
            dispatcher.dispatch({
                type: eventType,
                target: objRef,
                object: e
            })
        }
    }
    render() {
         return (<div>
                 <ul>
                      {this.state.records.map(function (record) {
                          return <li>{record}</li>
                      })}
                </ul>
                <input type="text"  onChange={this.changeHandler('update')} value={this.state.val}/>
                <button onClick={this.clickHandler('add')}>Add record</button>
                <button onClick={this.clickHandler('delete')}>Delete record</button>
                </div>
            )}
}

var component = document.getElementById("component")
ReactDOM.render(<List />, component);