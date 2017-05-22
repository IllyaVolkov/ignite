var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/workActions.js');

class Work extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Our Amazing Work</h2>
                <div className="separator"></div>
                <div className="nav">
                    <button onClick={this.props.select} className="selected">All</button>
                    <button onClick={this.props.select}>Graphic Design</button>
                    <button onClick={this.props.select}>Web Design</button>
                    <button onClick={this.props.select}>Landing Pages</button>
                    <button onClick={this.props.select}>Wordpress</button>
                </div>
                <div className="row">
                    {
                        this.props.data.map(function (item) {
                            return (<div style={{ backgroundImage: 'url(' + item.img + ')' }} className="img col-lg-3 col-md-4 col-sm-6 col-sm-offset-0 col-xs-10 col-xs-offset-1" onMouseOver={(e) =>{
                                        $(e.currentTarget.children[0]).addClass("hover");
                                    }} onMouseOut={(e) =>{
                                        $(e.currentTarget.children[0]).removeClass("hover");
                                    }}>
                                <div className="cover">
                                    <div className="workHoverIcon"></div>
                                    <h3>{item.name}</h3>
                                    <p>{item.category}</p>
                                </div>
                            </div>)
                        })
                    }
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
        select: actions.select
    }, dispatch)
}

module.exports = connect(mapState, matchProps)(Work);