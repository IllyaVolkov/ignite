var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/factsActions.js');

class Facts extends React.Component {
    constructor() {
        super();
        var facts = document.getElementById('facts');
        var currentObject = this;
        function watcher(e) {
            if (window.scrollY + screen.height > facts.getBoundingClientRect().top - document.body.getBoundingClientRect().top) {
                currentObject.scrollValues(3000);
                window.removeEventListener('scroll', watcher);
            }
        }
        window.addEventListener('scroll', watcher);
    }
    scrollValues(time) {
        var currentObject = this;
        var intervalHandler = setInterval(function () {
            var newValues = {
                "works": currentObject.props.data.works.state + ~~(currentObject.props.data.works.limit / time * 30),
                "customers": currentObject.props.data.customers.state + ~~(currentObject.props.data.customers.limit / time * 30),
                "purchase": currentObject.props.data.purchase.state + ~~(currentObject.props.data.purchase.limit / time * 30),
                "office": currentObject.props.data.office.state + ~~(currentObject.props.data.office.limit / time * 30)
            };
            currentObject.props.update(newValues);
            if (currentObject.props.data.works.state >= currentObject.props.data.works.limit + currentObject.props.data.works.limit / time * 30) {
                newValues = {
                    "works": currentObject.props.data.works.limit,
                    "customers": currentObject.props.data.customers.limit,
                    "purchase": currentObject.props.data.purchase.limit,
                    "office": currentObject.props.data.office.limit
                };
                currentObject.props.update(newValues);
                clearInterval(intervalHandler);
            }
        }, 30);
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 option dark">
                    <div className="works"></div>
                    <span>
                        <h2>
                            {this.props.data.works.state}
                        </h2>
                        <p>Works</p>
                    </span>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 option light">
                    <div className="customers"></div>
                    <span>
                        <h2>
                            {this.props.data.customers.state}
                        </h2>
                        <p>Customers</p>
                    </span>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 option dark">
                    <div className="purchase"></div>
                    <span>
                        <h2>
                            {this.props.data.purchase.state}
                        </h2>
                        <p>Purchase</p>
                    </span>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 option light">
                    <div className="office"></div>
                    <span>
                        <h2>
                            {this.props.data.office.state}
                        </h2>
                        <p>Office</p>
                    </span>
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
        update: actions.update
    }, dispatch)
}

module.exports = connect(mapState, matchProps)(Facts);