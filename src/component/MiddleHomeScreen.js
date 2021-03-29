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

          <section class = "w3-container w3-center w3-content w3-light-grey container">
            <h2 class="w3-wide">THE BAND</h2>
            <p class="w3-opacity"><i>We love music</i></p>
            <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          
          <img src="./images/middlescreenimg.png" class="img-fluid" alt="Responsive image"/>
          <div class="centered">Tasty coffee</div>
          <section class = "w3-container w3-center w3-content w3-light-grey container">
            <h2 class="w3-wide">THE BAND</h2>
            <p class="w3-opacity"><i>We love music</i></p>
            <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
      </div>
    );
  }
}

export default MiddleHomeScreen;
