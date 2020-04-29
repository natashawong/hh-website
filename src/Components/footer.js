import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="./Assets/hearhere.png" height="30" alt="hearhere" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                facebook
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                medium
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                instagram
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-primary" href="#" role="button">
                donate
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Footer;
