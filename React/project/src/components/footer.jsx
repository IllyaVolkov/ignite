var React = require('react');
var Scroll = require('react-scroll');

var Link = Scroll.Link;

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="hidden-sm hidden-xs">Copyright 2015 <span>theHam</span> | All Rights Reserved</div>
                <div className="hidden-lg hidden-md">&#9400; 2015 <span>theHam</span> | All Rights Reserved</div>   
                <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                        <div className="upArrow"></div>
                </Link>
            </div>
        )
    }
}

module.exports = Footer;