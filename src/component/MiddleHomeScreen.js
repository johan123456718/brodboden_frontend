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
          <img src="./images/middlescreenimg.png" class="img-fluid" alt="Responsive image"/>
          <div class="centered">Tasty coffee</div>
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
              <img src="./images/test2.png" class="rounded float-right " alt="test"/>
            </div>
          </section>
      </div>
    );
  }
}

export default MiddleHomeScreen;
