var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/newsActions.js');
var router = require('react-router');

var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute; 
var Route = router.Route;
var Router = router.Router;
var Link = router.Link;

class Info extends React.Component {
    render() {
        var id = this.props.params.id;
        var record = this.props.data.filter(function (item) { return item.id == id })[0];
        var date = new Date(record.date);
        return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="record">
                    <div className="title">{date.toDateString()}: {record.name}<Link to="/"><div className="cross"></div></Link></div>
                    <div className="text">{record.text}</div>
                </div> 
            </div>
        );
    }
}

class AllNews extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.data.map(function (item) {
                        var date = new Date(item.date);
                        return (
                            <Link to={'/news/'+item.id}>
                                <div className="item col-lg-3">
                                    <div className="img" style={{backgroundImage: 'url('+item.img+')'}}>
                                        <div className="date">
                                            <p>{date.getDate()}</p>
                                            <p>{date.toDateString().split(' ')[1]}</p>
                                        </div>
                                    </div>
                                    <div className="text">{item.name}</div>
                                </div>
                            </Link>
                        )
                    })
                }
                <button onClick={this.props.load}><div className="plus"></div>load more</button>
            </div>
        );
    }
}

class News extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Breaking News</h2>
                <div className="separator"></div>
                {this.props.children}
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
        load: actions.load
    }, dispatch)
}

class RouteWrapper extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={News}>
                    <IndexRoute component={connect(mapState, matchProps)(AllNews)}/>
                    <Route path="*/:id" component={connect(mapState, matchProps)(Info)}  />
                    <Route path="*" component={connect(mapState, matchProps)(AllNews)} />
                </Route>
            </Router>
        )
    }
}

module.exports = RouteWrapper;