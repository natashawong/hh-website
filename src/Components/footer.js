import React, { Component } from "react";
import './footer.css';
import greenLogo from '../Assets/greenbglogo.png';

class Footer extends Component {
  render() {
    return (
      // Sorry Jaden! For wtv reason I'm not sure why the footer doesn't show up correctly on my screen so I just quickly wrote one up.
      //
      // <nav className="navbar navbar-expand-md navbar-light bg-light">
      //   <a class="navbar-brand" href="#">
      //     <img src="./Assets/hearhere.png" height="30" alt="hearhere" />
      //   </a>

      //   <button
      //     class="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarSupportedContent"
      //   >
      //     <span class="navbar-toggler-icon"></span>
      //   </button>

      //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul class="navbar-nav ml-auto">
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">
      //           facebook
      //         </a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">
      //           medium
      //         </a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">
      //           instagram
      //         </a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link btn btn-primary" href="#" role="button">
      //           donate
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
      <div className="footer">
        <div className="footerContainer">
        <span>
          <img src={greenLogo} alt="greenLogo" style={{width: 250}}/>

          <span id="outsideLinks">
            <a href="https://www.facebook.com/hearherejournal/">facebook</a>
            <a href="https://www.instagram.com/hearhere.journal/?hl=en">instagram</a>
            <a href="https://medium.com/@hearhere.journal">medium</a>
            <a style={{border: "1px solid white"}}>donate</a>
          </span>
        </span>
        </div>

        <div id="creditText">
          <p>Built by the hearhere web development team</p>
        </div>
      </div>
    );
  }
}

export default Footer;
