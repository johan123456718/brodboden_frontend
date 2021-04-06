import React, { Component } from "react";
import { ButtonGroup, ToggleButton, Form, Button, Navbar, Nav, FormControl, NavDropdown, Modal } from 'react-bootstrap';
import './css/MiddleHomeScreen.css';
class MiddleHomeScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      displayName: 'Home',
      isOnLogPage: false,
      isOnMessagePage: true,
      inputUpdated: false,
      showLogin: false,
      showLogout: true,
      notLoggedIn: false,
      searchString: '',
    }
  }
  render(){
    return (
      <div className="App">
        <div class = "slideshow-container">
          <div class = "w-100 h-75">
            <div id="my-slider" class="carousel slide" data-ride="carousel" data-interval="2500">
              <ol class="carousel-indicators">
                <li data-target="#my-slider" data-slide-to="0" class="active"></li>
                <li data-target="#my-slider" data-slide-to="1"></li>
                <li data-target="#my-slider" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="./images/test.png" alt="First slide"/>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="./images/test.png" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="./images/test.png" alt="Third slide"/>
                </div>
              </div>
              <a class="carousel-control-prev" href="#my-slider" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#my-slider" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <img src = "./images/brodbodenicon2.png" className = "brodboden_icon2" alt = "icon image"/>
        <section class = "w3-container w3-center w3-content w3-light-grey container">
          <div class = "float-left content">
            <img src="./images/test.png" class="rounded float-left " alt="test"/>
            <h3 className = "w3-justify-title">THE BAND</h3>
            <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>

          <div class = "float-left content">
            <img src="./images/test.png" class="rounded float-left " alt="test"/>
            <h3 className = "w3-justify-title">THE BAND</h3>
            <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>

          <div class = "float-right content">
            <img src="./images/openhours.png" class="open-hours-img" alt="test"/>
          </div>
        </section>
      </div>
    );
  }
}

export default MiddleHomeScreen;
