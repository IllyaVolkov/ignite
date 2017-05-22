var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/selectActions.js');
var router = require('react-router');
var dataJSON = require('../data/services.json');

var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute; 
var Route = router.Route;
var Router = router.Router;
var Link = router.Link;

class Info extends React.Component {
    render() {
        return (
            <div className="info row">
                <div className="img col-lg-2 col-md-2 col-sm-4 col-xs-12" style={{backgroundImage: 'url(' + this.props.img + ')'}}></div>
                <div className="text col-lg-10 col-md-10 col-sm-8 col-xs-12">{this.props.text}</div>
            </div>
        );
    }
}

class Services extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Our Services</h2>
                <div className="separator"></div>
                <div className="row">
                    <Link to="/webdesign" onClick={this.props.select} className="selected"><div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                        <div className="option">Web Design</div>
                        <div className="triangle"></div>
                    </div></Link>
                    <Link to="/graphicdesign"><div className="col-lg-2 col-md-2 col-sm-4 col-xs-12" onClick={this.props.select}>
                        <div className="option">Graphic Design</div>
                        <div className="triangle"></div>
                    </div></Link>
                    <Link to="/support"><div className="col-lg-2 col-md-2 col-sm-4 col-xs-12" onClick={this.props.select}>
                        <div className="option">Online Support</div>
                        <div className="triangle"></div>
                    </div></Link>
                    <Link to="/appdesign"><div className="col-lg-2 col-md-2 col-sm-4 col-xs-12" onClick={this.props.select}>
                        <div className="option">App Design</div>
                        <div className="triangle"></div>
                    </div></Link>
                    <Link to="/online"><div className="col-lg-2 col-md-2 col-sm-4 col-xs-12" onClick={this.props.select}>
                        <div className="option">Online Marketing</div>
                        <div className="triangle"></div>
                    </div></Link>
                    <Link to="/seo"><div className="col-lg-2 col-md-2 col-sm-4 col-xs-12" onClick={this.props.select}>
                        <div className="option">Seo Service</div>
                        <div className="triangle"></div>
                    </div></Link>
                </div>
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
        select: actions.select
    }, dispatch)
}

class RouteWrapper extends React.Component {
    render() {
        var data = dataJSON;
        return (
            <Router history={hashHistory}>
                <Route path="/" component={connect(mapState, matchProps)(Services)}>
                    <IndexRoute component={(props,state,params) => <Info text={data.web.text} img={data.web.img}/>}/>
                    <Route path="webdesign" component={ (props,state,params) => <Info text={data.web.text} img={data.web.img}/>}  />
                    <Route path="graphicdesign" component={(props,state,params) => <Info text={data.graphic.text} img={data.graphic.img}/>} />
                    <Route path="support" component={(props,state,params) => <Info text={data.support.text} img={data.support.img}/>} />
                    <Route path="appdesign" component={(props,state,params) => <Info text={data.app.text} img={data.app.img}/>} />
                    <Route path="online" component={(props,state,params) => <Info text={data.marketing.text} img={data.marketing.img}/>} />
                    <Route path="seo" component={(props,state,params) => <Info text={data.seo.text} img={data.seo.img}/>} />
                    <Route path="*" component={(props,state,params) => <Info text={data.web.text} img={data.web.img}/>} />
                </Route>
            </Router>
        )
    }
}

module.exports = RouteWrapper;