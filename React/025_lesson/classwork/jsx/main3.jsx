var React = require('react');
var ReactDOM = require('react-dom');

var Dispatcher = require('flux').Dispatcher;
var EventEmitter = require('events').EventEmitter;

var dispatcher = new Dispatcher;
var timerHandler;

class AppStore extends EventEmitter {
    handleActions(action) {
        switch (action.type) {
            case '+': {
                action.target.setState({ result: +action.target.state.val1 + +action.target.state.val2 });
                break;
            }
            case '-': {
                action.target.setState({ result: +action.target.state.val1 - +action.target.state.val2 });
                break;
            }
            case '*': {
                action.target.setState({ result: +action.target.state.val1 * +action.target.state.val2 });
                break;
            }
            case '/': {
                action.target.setState({ result: +action.target.state.val1 / +action.target.state.val2 });
                break;
            }
            case 'val1': {
                action.target.setState({ val1: action.object.target.value });
                break;
            }
            case 'val2': {
                action.target.setState({ val2: action.object.target.value });
                break;
            }
        }
    }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

class Calc extends React.Component {
    constructor() {
        super()
        this.state = {
            result: 0
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.render = this.render.bind(this);
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
                     Result: <h1>{this.state.result}</h1>
                    <input type="text" onChange={this.changeHandler('val1')} value={this.state.val1} />
                    <input type="text" onChange={this.changeHandler('val2')} value={this.state.val2} />
                    <br />
                    <button onClick={this.clickHandler('+')}>+</button>
                    <button onClick={this.clickHandler('-')}>-</button>
                    <button onClick={this.clickHandler('*')}>*</button>
                    <button onClick={this.clickHandler('/')}>/</button>
         </div>)}
}

var component = document.getElementById("component")
ReactDOM.render(<Calc />, component);