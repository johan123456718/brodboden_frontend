import React, { Component } from "react";
import { ButtonGroup, ToggleButton, Form, Button, Navbar, Nav, FormControl, NavDropdown, Modal } from 'react-bootstrap';
import './css/Footer.css';
class Footer extends Component{

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

<footer class="page-footer font-small blue pt-4">


    <div class="container-fluid text-center text-md-left">


      <div class="row">


        <div class="col-md-6 mt-md-0 mt-3">
          <h5 class="text-uppercase">Footer Content</h5>
          <p>Here you can use rows and columns here to organize your footer content.</p>
          <a class = "icon-link" href = "https://www.instagram.com/brodboden/">
            <i class="fa fa-instagram "/>
          </a>

          <a class = "icon-link" href = "https://www.facebook.com/brodboden">
            <i class="fa fa-facebook-square"/>
          </a>
        </div>


        <hr class="clearfix w-100 d-md-none pb-3"/>


        <div class="col-md-3 mb-md-0 mb-3">


            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a class = "footer-link" href="#!">Link 1</a>
              </li>
              <li>
                <a class = "footer-link" href="#!">Link 2</a>
              </li>
              <li>
                <a class = "footer-link" href="#!">Link 3</a>
              </li>
              <li>
                <a class = "footer-link" href="#!">Link 4</a>
              </li>
            </ul>

          </div>



          <div class="col-md-3 mb-md-0 mb-3">


            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a class = "footer-link" href="#!">Link 1</a>
              </li>
              <li>
                <a  class = "footer-link" href="#!">Link 2</a>
              </li>
              <li>
                <a class = "footer-link" href="#!">Link 3</a>
              </li>
              <li>
                <a class = "footer-link" href="#!">Link 4</a>
              </li>
            </ul>

          </div>


      </div>


    </div>

    <div class="footer-copyright text-center py-3">© 2021 Copyright: Johan Challita
    </div>


  </footer>

      </div>
    );
  }
}

export default Footer;
