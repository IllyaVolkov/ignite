var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');
var Route = router.Route;
var Router = router.Router;
var Redirect = router.Redirect;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;
var Homepage = require('../views/homepage.jsx');
var View1 = require('../views/view1.jsx');
var View2 = require('../views/view2.jsx');

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to="/view1"><button>View 1</button></Link>
                <Link to="/view2"><button>View 2</button></Link>{this.props.children}
            </div>
            )
    }
}


var component = document.getElementById("component")
ReactDOM.render(
      <Router history={hashHistory}>
        <Route component={Buttons}>
            <Route path="/" component={Homepage} />
            <Route path="/view1" component={View1} />
            <Route path="/view2" component={View2} />
            <Redirect from="*" to="/" /> 
        </Route>
      </Router>, component);