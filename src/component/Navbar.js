import React, { Component } from "react";
import { ButtonGroup, ToggleButton, Form, Button, Nav, FormControl, NavDropdown, Modal } from 'react-bootstrap';
import './css/Navbar.css';
class Navbar extends Component{

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
        <nav class="navbar navbar-expand-lg navbar-dark bg border-bottom border-secondary">
          <img src = "./images/brodbodenicon.jpeg" className = "brodboden_icon"/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto justify-content-end">
              <li class="nav-item active">
                <a class="nav-link" href="#">Hem<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Menu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Om oss</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Kontakta oss</a>
              </li>
            </ul>
            <i class="fa fa-shopping-cart"/>
            <span className="badge" id='lblCartCount'> 0 </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
