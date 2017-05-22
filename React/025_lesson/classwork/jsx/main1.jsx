var React = require('react');
var ReactDOM = require('react-dom');

var Dispatcher = require('flux').Dispatcher;
var EventEmitter = require('events').EventEmitter;

var dispatcher = new Dispatcher;

class AppStore extends EventEmitter {
    handleActions(action) {
        switch (action.type) {
            case 'CLICK': {
                switch (action.target.state.style) {
                    case 'red': action.target.setState({ style: 'black' }); break;
                    case 'black': action.target.setState({ style: 'red' }); break;
                }
                break;
            }
        }
    }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

class StyledDiv extends React.Component {
    constructor() {
        super()
        this.state = {
            style: 'red'
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.render = this.render.bind(this);
    }
    clickHandler() {
        dispatcher.dispatch({
            type: 'CLICK',
            target: this
        })
    }
    render() { 
        return (
            <div>
                <div id="block" className={this.state.style}></div>
                <button onClick={this.clickHandler}>Change style!</button>
            </div>
    )}
}

var component = document.getElementById("component")
ReactDOM.render(<StyledDiv/>, component);