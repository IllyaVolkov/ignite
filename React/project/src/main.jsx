'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;

// Components

var Header = require('./components/header.jsx');
var Home = require('./components/home.jsx');
var FourOptions = require('./components/fourOptions.jsx');
var Services = require('./components/services.jsx');
var About = require('./components/about.jsx');
var Work = require('./components/work.jsx');
var Team = require('./components/team.jsx');
var Facts = require('./components/facts.jsx');
var News = require('./components/news.jsx');
var Feedback = require('./components/feedback.jsx');
var Contact = require('./components/contact.jsx');
var Footer = require('./components/footer.jsx');

// Reducers

var headerReducer = require('./reducers/headerReducer');
var factsReducer = require('./reducers/factsReducer');
var homeReducer = require('./reducers/homeReducer');
var contactReducer = require('./reducers/contactReducer');
var servicesReducer = require('./reducers/servicesReducer');
var teamReducer = require('./reducers/teamReducer');
var workReducer = require('./reducers/workReducer');
var aboutReducer = require('./reducers/aboutReducer');
var feedbackReducer = require('./reducers/feedbackReducer');
var newsReducer = require('./reducers/newsReducer');

// Stores

var headerStore = createStore(headerReducer);
var factsStore = createStore(factsReducer);
var homeStore = createStore(homeReducer);
var contactStore = createStore(contactReducer);
var servicesStore = createStore(servicesReducer);
var teamStore = createStore(teamReducer);
var workStore = createStore(workReducer);
var aboutStore = createStore(aboutReducer);
var feedbackStore = createStore(feedbackReducer);
var newsStore = createStore(newsReducer);

// Rendering

window.addEventListener('load', function () {
    ReactDOM.render(<Provider store={headerStore}><Header /></Provider>, document.getElementById('header'));
    ReactDOM.render(<Provider store={homeStore}><Home /></Provider>, document.getElementById('home'));
    ReactDOM.render(<FourOptions />, document.getElementById('fourOptions'));
    ReactDOM.render(<Provider store={servicesStore}><Services /></Provider>, document.getElementById('services'));
    ReactDOM.render(<Provider store={aboutStore }><About /></Provider>, document.getElementById('about'));
    ReactDOM.render(<Provider store={workStore}><Work /></Provider>, document.getElementById('work'));
    ReactDOM.render(<Provider store={teamStore}><Team /></Provider>, document.getElementById('team'));
    ReactDOM.render(<Provider store={factsStore}><Facts /></Provider>, document.getElementById('facts'));
    ReactDOM.render(<Provider store={newsStore}><News /></Provider>, document.getElementById('news'));
    ReactDOM.render(<Provider store={feedbackStore}><Feedback /></Provider>, document.getElementById('feedback'));
    ReactDOM.render(<Provider store={contactStore}><Contact /></Provider>, document.getElementById('contact'));
    ReactDOM.render(<Footer />, document.getElementById('footer'));
});