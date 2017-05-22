var React = require('react');

class FourOptions extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 option dark">
                    <div className="content">
                        <div className="option1"></div>
                    </div>
                    <p>personalized options</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 option light">
                    <div className="content">
                        <div className="option2"></div>
                    </div>
                    <p>fully customizable</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 option dark">
                    <div className="content">
                        <div className="option3"></div>
                    </div>
                    <p>unlimited support</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 option light">
                    <div className="content">
                        <div className="option4"></div>
                    </div>
                    <p>responsive all device</p>
                </div>
            </div>
            )
        }
}

module.exports = FourOptions;