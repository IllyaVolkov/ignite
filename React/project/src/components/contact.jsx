var React = require('react');
import GoogleMapReact from 'google-map-react';
var bindActionCreators = require('redux').bindActionCreators; 
var connect = require('react-redux').connect;
var actions = require('../actions/contactActions.js'); 

class Contact extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="map col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <GoogleMapReact center={{lat: 50.4445671, lng: 30.4511292}} zoom={17} bootstrapURLKeys={{ key: 'AIzaSyBShUfw_qUpuU-kM1fNR_U5vZlGNKL--XU', language: 'en'}}>
                        <div lat={50.4445671} lng={30.4511292} className="mark"></div>
                    </GoogleMapReact>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h2>Keep In Touch</h2>
                    <div className="separator"></div>
                    <form>
                        <input type="text" placeholder="Name" onChange={this.props.checkName}/><br/><div className="Error">{this.props.data.errorName}</div>
                        <input type="text" placeholder="Email" onChange={this.props.checkEmail}/><br/><div className="Error">{this.props.data.errorEmail}</div>
                        <textarea placeholder="Message" rows="7" onChange={this.props.checkMessage}></textarea><br/><div className="Error">{this.props.data.errorMessage}</div>
                        <button type="submit">send request</button>
                    </form>
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
        checkName: actions.checkName,
        checkEmail: actions.checkEmail,
        checkMessage: actions.checkMessage
    }, dispatch)
}

module.exports = connect(mapState, matchProps)(Contact);