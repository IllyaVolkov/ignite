var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/aboutActions.js');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Stats extends React.Component {
    render() {
        return (
            <div>
                <div className="strip">
                    <p>user interface</p>
                    <ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                        <div key={1} style={{ width: this.props.data.skills.interface + '%', backgroundColor: '#9c5da5' }}></div>
                    </ReactCSSTransitionGroup>
                </div>
                <div className="strip">
                    <p>web design</p>
                    <ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                        <div key={2} style={{ width: this.props.data.skills.web + '%', backgroundColor: '#11b0de' }}></div>
                    </ReactCSSTransitionGroup>
                </div>
                <div className="strip">
                    <p>wordpress</p>
                    <ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                        <div key={3} style={{ width: this.props.data.skills.wordpress + '%', backgroundColor: '#d67f7f' }}></div>
                    </ReactCSSTransitionGroup>
                </div>
                <div className="strip">
                    <p>html & css</p>
                    <ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                        <div key={4} style={{ width: this.props.data.skills.html + '%', backgroundColor: '#20bc9d' }}></div>
                    </ReactCSSTransitionGroup>
                </div>
                <div className="strip">
                   <p>app design</p>
                   <ReactCSSTransitionGroup transitionName="transition" transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
                       <div key={5} style={{ width: this.props.data.skills.app + '%', backgroundColor: '#bb8a36' }}></div>
                   </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

class About extends React.Component {
    componentDidMount() {
        var about = document.getElementById('about');
        var currentObj = this;
        function watcher(e) {
            if (window.scrollY + screen.height > about.getBoundingClientRect().top - document.body.getBoundingClientRect().top) {
                ReactDOM.render(<Stats data={currentObj.props.data }/>, document.getElementById('about').getElementsByClassName('info')[0].getElementsByClassName('skills')[0]);
                window.removeEventListener('scroll', watcher);
            }
        }
        window.addEventListener('scroll', watcher);
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="img col-lg-6 col-md-6 col-sm-12 col-xs-12"></div>
                <div className="data col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="header">
                        <h2>About Our Company</h2>
                        <div className="separator"></div>
                    </div><br/>
                    <button onClick={this.props.select}>our history</button>
                    <button onClick={this.props.select}>our biography</button>
                    <button className="selected" onClick={this.props.select}>our skills</button>
                    <div className="info skills">
                        <div className="history col-lg-8 col-md-10 col-sm-8 col-xs-10">
                            <p>{this.props.data.history.text}</p>
                            {
                                this.props.data.history.paragraphs.map(function (item) {
                                    return (<p className="col-lg-6 col-md-12 col-sm-6 col-xs-12">{item}</p>)
                                })
                            }
                        </div>
                        <div className="biography col-lg-8 col-md-10 col-sm-8 col-xs-10">
                            <p>{this.props.data.biography.text}</p>
                        </div>
                        <div className="skills col-lg-8 col-md-10 col-sm-8 col-xs-10">
                            
                        </div>
                    </div>
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
        select: actions.select,
        render: actions.render
    }, dispatch)
}

module.exports = connect(mapState, matchProps)(About);