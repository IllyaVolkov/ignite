var React = require('react');
var Scroll = require('react-scroll');
var bindActionCreators = require('redux').bindActionCreators; 
var connect = require('react-redux').connect;
var actions = require('../actions/headerActions.js'); 

var Link = Scroll.Link;

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-sm-offset-0 col-xs-7">
                        <div className="logo"></div>
                    </div>
                    <div className="col-lg-3 col-md-2 hidden-sm hidden-xs"></div>
                    <div className="col-lg-6 col-md-7 hidden-sm hidden-xs">
                        {
                            this.props.data.map(function (item) {
                                return (
                                    <Link className={(function(){if(item.selected) return 'selected option'; return 'option'}())} activeClass="active" to={item.source} spy={true} smooth={true} duration={500 } onClick={()=>this.props.select(item.name)}>
                                        {item.name}
                                    </Link>)
                            }.bind(this))
                        }
                    </div>  
                    <div className="dropdown btn-group hidden-lg hidden-md col-sm-offset-7 col-sm-1 col-xs-2 col-xs-offset-3">
                        <i data-toggle="dropdown" className="fa fa-bars fa-2x"></i>
                        <ul className="dropdown-menu dropdown-menu-right">
                            {
                                this.props.data.map(function (item) {
                                    return (
                                        <li>
                                            <Link className={(function(){if(item.selected) return 'selected option list'; return 'option list'}())} activeClass="active" to={item.source} spy={true} smooth={true} duration={500 } onClick={()=>this.props.select(item.name)}>
                                                {item.name}
                                            </Link>
                                        </li>)
                                }.bind(this))
                            }
                        </ul>
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
        select: actions.select
    } , dispatch )
}

module.exports = connect(mapState, matchProps)(Header);