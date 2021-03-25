import React, { Component } from "react";
import { ButtonGroup, ToggleButton, Form, Button, Navbar, Nav, FormControl, NavDropdown, Modal } from 'react-bootstrap';
import './css/Navbar.css';
class App extends Component{

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
        <div class ="navbar navbar-expand-lg navbar-dark bg-danger">
          <a class="navbar-logo" href="#">
            <img src="./images/brodbodenicon.jpeg" class="rounded mx-auto d-block brodboden_icon" alt="Brödboden icon"/>
          </a>
        </div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-danger border-bottom border-secondary">

        <a class = "icon-link" href = "https://www.instagram.com/brodboden/">
          <i class="fa fa-instagram "/>
        </a>

        <a class = "icon-link" href = "https://www.facebook.com/brodboden">
          <i class="fa fa-facebook-square"/>
        </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto justify-content-center">
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
            <div class="hiddenBox"/>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
