var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');
var Route = router.Route;
var Router = router.Router;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;

var users = [{ first_name: "Matthew", last_name: "Phillips", email: "mphillips0@myspace.com", gender: "Male", ip_address: "14.241.172.154", id: 23468 },
        { first_name: "Larry", last_name: "Weaver", email: "lweaver1@slideshare.net", gender: "Male", ip_address: "126.139.9.128", id: 89078 },
        { first_name: "Barbara", last_name: "Tucker", email: "btucker2@cbc.ca", gender: "Female", ip_address: "92.195.229.16", id: 56435 },
        { first_name: "Jonathan", last_name: "Cook", email: "jcook3@fc2.com", gender: "Male", ip_address: "187.79.225.71", id: 78908 },
        { first_name: "Jean", last_name: "Flores", email: "jflores4@last.fm", gender: "Female", ip_address: "222.197.158.249, id:67653" },
        { first_name: "Kimberly", last_name: "Nelson", email: "knelson5@nifty.com", gender: "Female", ip_address: "111.174.89.57", id: 83425 },
        { first_name: "Willie", last_name: "Banks", email: "wbanks6@abc.net.au", gender: "Male", ip_address: "97.0.19.154", id: 99873 },
        { first_name: "Michael", last_name: "King", email: "mking7@w3.org", gender: "Male", ip_address: "149.114.62.6", id: 34239 }];

class App extends React.Component {
    render() {
        return (
            <div>
                <Link to="/listView"><button>ListView</button></Link>
                <Link to="/tableView"><button>TableView</button></Link>{this.props.children}
            </div>
            )
    }
}

class listView extends React.Component {
    render() {
        return (
                 <ul>
                     {users.map(function (user) {
                         return <li onClick={() => { window.location.href += '/'+user.id } }>{user.first_name + " " + user.last_name}</li>
                     })}
                 </ul>
            )
    }
}

class tableView extends React.Component {
    render() {
        return (
                 <table>
                     {users.map(function (user) {
                         return <tr onClick={() => { window.location.href += '/'+user.id } }><td>{user.first_name}</td><td>{user.last_name}</td><td>{user.gender}</td></tr>
                         })}
                 </table>
            )
    }
}

class Item extends React.Component {
    render() {
        var id = this.props.params.id;
        return (
                 <table>
                     {users.map(function (user) {
                         if (id == user.id)
                         return <tr><td>{user.first_name}</td><td>{user.last_name}</td><td>{user.gender}</td></tr>
        })}
                 </table>
            )
                 }
                 }

var component = document.getElementById("component")
ReactDOM.render(
      <Router history={hashHistory}>
        <Route component={App}>
            <Route path="/" component={null} />
            <Route path="/listView" onEnter={() => {alert('You have switched to the list mode!')}} component={listView} />
            <Route path="/listView/:id" component={Item} />
            <Route path="/tableView" onEnter={() => { alert('You have switched to the table mode!') }} component={tableView} />
            <Route path="/tableView/:id" component={Item} />
        </Route>
      </Router>, component);