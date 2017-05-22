var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

class Team extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Meet Our Team</h2>
                <div className="separator"></div>
                {
                    this.props.data.map(function (member) {
                        return(
                            <div className="col-lg-3 col-md-3 col-sm-6 col-sm-offset-0 col-xs-8 col-xs-offset-2">
                                <div className="photo" style={{ backgroundImage: 'url(' + member.photo + ')' }} onMouseOver={(e) =>{
                                        $(e.currentTarget.children[0]).addClass("hover");
                                    }} onMouseOut={(e) =>{
                                        $(e.currentTarget.children[0]).removeClass("hover");
                                    }}>
                                    <div className="teamPlus"></div>
                                </div>
                                <div className="data">
                                    <h3>{member.name}</h3>
                                    <p>{member.position}</p>
                                </div>
                                <div className="link">
                                    <a href="http://facebook.com"><div className="facebook"></div></a>
                                    <a href="http://twitter.com"><div className="twitter"></div></a>
                                    <a href="http://skype.com"><div className="skype"></div></a>
                                    <a href="http://vine.co"><div className="iconV"></div></a>
                                </div>
                            </div>
                        )
                    })
                }
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
        
    }, dispatch)
}

module.exports = connect(mapState, matchProps)(Team);