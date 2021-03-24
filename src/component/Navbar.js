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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <i class="fa fa-home homeIcon"/>
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
              <i class="fa fa-envelope messageIcon"/>
                <a class="nav-link" href="#">Message</a>
              </li>
              <li class="nav-item">
              <i class="fa fa-bell notificationIcon"/>
                <a class="nav-link" href="#">Notifications</a>
              </li>
            </ul>
            <div class="input-icons">
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <i class="fa fa-search searchIcon"/>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
