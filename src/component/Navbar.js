import React, { Component } from "react";
import { ButtonGroup, ToggleButton, Form, Button, Nav, FormControl, NavDropdown, Modal } from 'react-bootstrap';
import './css/Navbar.css';
import Menu from '../sites/Menu.js';
import MiddleHomeScreen from '../component/MiddleHomeScreen.js';
import AboutUs from '../sites/AboutUs.js'
import $ from 'jquery';

class Navbar extends Component{

  constructor(props){
    super(props);
    this.state = {
      isOnHomePage: true,
      isOnMenuPage: false,
      isAboutUsPage: false,
    }
  }

  resetStates() {
    if (this.state.isOnHomePage){
      this.state.isOnHomePage = false;
    }
    if (this.state.isOnMenuPage){
      this.state.isOnMenuPage = false;
    }

    if (this.state.isAboutUsPage){
      this.state.isAboutUsPage = false;
    }
  }

  showHomePage(){
    this.setState({isOnHomePage: false});
    this.resetStates();
    this.setState({
      isOnHomePage: !this.state.isOnHomePage
    })
  }

  showMenuPage(){
    this.setState({isOnMenuPage: false});
    this.resetStates();
    this.setState({
      isOnMenuPage: !this.state.isOnMenuPage
    })
  }

  showAboutUsPage(){
    this.setState({isAboutUsPage: false});
    this.resetStates();
    this.setState({
      isAboutUsPage: !this.state.isAboutUsPage
    })
  }

  componentDidMount() {
    $(document).ready(function() {
      $(".mr-auto .nav-item").bind( "click", function(event) {
          event.preventDefault();
          var clickedItem = $(this);
          $(".mr-auto .nav-item").each( function() {
              $(this).removeClass( "active" );
          });
          clickedItem.addClass( "active" );
      });
    });
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
                <a class="nav-link" href="#" onClick = {() => this.showHomePage()}>Hem<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick = {() => this.showMenuPage()}>Meny</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick = {() => this.showAboutUsPage()}>Om oss</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Kontakta oss</a>
              </li>
            </ul>
            <i class="fa fa-shopping-cart"/>
            <span className="badge" id='lblCartCount'> 0 </span>
          </div>
        </nav>

      {this.state.isOnHomePage?
        <MiddleHomeScreen/>
      :null}

      {this.state.isOnMenuPage?
        <div>
          <Menu/>
        </div>
      :null}

      {this.state.isAboutUsPage?
          <div>
          <AboutUs/>
          </div>
      :null}

      </div>
    );
  }
}
export default Navbar;
