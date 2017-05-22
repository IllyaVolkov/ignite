var React = require('react');
var Scroll = require('react-scroll');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/homeActions.js');

var Link = Scroll.Link;

class Home extends React.Component {
    componentDidMount() {
        var currentObj = this;
        this.scrollHandler = setInterval(currentObj.props.next, 3000);
    }
    render() {
        return (
            <div className="container-fluid" style={{backgroundImage: 'url(' +this.props.data[0].image+')'}}>
                <div className="col-lg-offset-1 col-lg-1 col-md-1 col-sm-2 col-xs-3">
                    <div className="homeLeft" onClick={() => {
                            clearInterval(this.scrollHandler);
                            clearTimeout(this.timeout);
                            this.props.prev();
                            var currentObj = this;
                            this.timeout = setTimeout(function () { currentObj.scrollHandler = setInterval(currentObj.props.next, 3000) }, 2000);
                            return;
                        }}>
                    </div>
                </div>
                <div className="col-lg-offset-8 col-lg-1 col-md-offset-10 col-md-1 col-sm-offset-8 col-sm-2 col-xs-offset-6 col-xs-3">
                    <div className="homeRight" onClick={() => {
                            clearInterval(this.scrollHandler);
                            clearTimeout(this.timeout);
                            this.props.next();
                            var currentObj = this;
                            this.timeout = setTimeout(function () { currentObj.scrollHandler = setInterval(currentObj.props.next, 3000) }, 2000);
                            return;
                        }}>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="container">
                        <h3>the ham is <span>a psd template</span></h3>
                        <h1 className="hidden-sm hidden-xs">we are creative</h1>
                        <h2 className="hidden-lg hidden-md">we are creative</h2>
                        <p>{this.props.data[0].text}</p>
                        <div className="row">
                            <Link activeClass="active" to="work" spy={true} smooth={true} duration={500}>
                                <button className="green">explore now</button>
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                                <button className="blue">purchase now</button>
                            </Link>
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
        next: actions.next,
        prev: actions.prev
    }, dispatch)
}

module.exports = connect(mapState, matchProps)(Home);