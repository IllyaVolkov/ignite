var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Route = router.Route;
var Router = router.Router;
var Link = router.Link;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;
var routes = require('./index.js');


var component = document.getElementById("component")
ReactDOM.render(
      <Router routes={routes}/>, component);
