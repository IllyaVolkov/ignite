var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/feedbackActions.js');

class Feedback extends React.Component {
    render() {
        var obj = this;
        return (
            <div className="container">
                <h2>Feedback</h2>
                <div className="separator"></div>
                <div className="news col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    {
                        this.props.data.map(function (item) {
                            return (
                                <div className="record">
                                    <div className="title">{item.title}<div className="cross" onClick={obj.props.remove.bind(obj, item.id)}></div></div>
                                    <div className="text">{item.text}</div>
                                </div>    
                            )
                        })
                    }
                </div>
                <div className="input col-lg-5 col-lg-offset-1 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12">
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Message"></textarea>
                </div>
                <div className="send col-lg-5 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12">
                    <h2>Leave us a message</h2>
                    <button onClick={this.props.add}><div className="plus"></div>add comment</button>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    return {
        data: state
    }
}

function matchProps(dispatch) {
    return bindActionCreators({
        add: actions.add,
        remove: actions.remove
    }, dispatch)
}

module.exports = connect(mapState, matchProps)(Feedback);