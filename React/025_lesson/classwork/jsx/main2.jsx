var React = require('react');
var ReactDOM = require('react-dom');

var Dispatcher = require('flux').Dispatcher;
var EventEmitter = require('events').EventEmitter;

var dispatcher = new Dispatcher;
var timerHandler;

class AppStore extends EventEmitter {
    handleActions(action) {
        switch (action.type) {
            case 'start': {
                var obj = action.target;
                if (!timerHandler)
                    timerHandler = setInterval(function () {
                        obj.setState({ timer: obj.state.timer + 1 });
                    }, 1000);
                break;
            }
            case 'reset': {
                action.target.setState({ timer: 0 });
                break;
            }
            case 'stop': {
                clearInterval(timerHandler);
                timerHandler = null;
                break;
            }
        }
    }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            timer: 0
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.render = this.render.bind(this);
    }
    setTimer() {
        var obj = this;
        timerHandler = setInterval(function () {
            obj.setState({ timer: obj.state.timer + 1 });
        }, 1000);
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
    render() {
        if(this.setTimer) this.setTimer();
         this.setTimer = null;
         return (<div>
                    <p>{this.state.timer}</p>
                    <button onClick={this.clickHandler('reset')}>Reset</button>
                    <button onClick={this.clickHandler('start')}>Start</button>
                    <button onClick={this.clickHandler('stop')}>Stop</button>
         </div>)}
}

var component = document.getElementById("component")
ReactDOM.render(<Timer />, component);