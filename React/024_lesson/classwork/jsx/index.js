var View1 = require('../views/view1.jsx');
var View2 = require('../views/view2.jsx');
var router = require('react-router');
var Link = router.Link;
var React = require('react');

class Buttons extends React.Component {
    render() {
        return (
            <div>   
                <h1>Home</h1>
                <Link to="/view1"><button>View 1</button></Link>
                <Link to="/view2"><button>View 2</button></Link>
                {this.props.children}
            </div>
            )
    }
}

const routes = {
    path: '/',
    component: Buttons,
    childRoutes: [
        { path: 'view1', component: View1 },
        { path: 'view2', component: View2 }
    ]
}

module.exports = routes;