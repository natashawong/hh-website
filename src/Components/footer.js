import React, { Component } from "react";
import './footer.css';
import greenLogo from '../Assets/greenbglogo.png';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerContainer">
        <span>
          <img src={greenLogo} alt="greenLogo" style={{width: 250}}/>

          <span id="outsideLinks">
            <a href="https://www.facebook.com/hearherejournal/">facebook</a>
            <a href="https://www.instagram.com/hearhere.journal/?hl=en">instagram</a>
            <a href="https://medium.com/@hearhere.journal">medium</a>
            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=276UDQ8NJSFLU&source=url" style={{border: "1px solid white"}}>donate</a>
          </span>
        </span>
        </div>

        <div id="creditText">
          <p>Built by the hearhere web development team</p>
        </div>
      </div>
    )
  }
}

export default Footer;
