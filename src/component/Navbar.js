import React, { Component } from "react";
import { ButtonGroup, ToggleButton, Form, Button, Nav, FormControl, NavDropdown, Modal } from 'react-bootstrap';
import './css/Navbar.css';
import Menu from '../sites/Menu.js';
import MiddleHomeScreen from '../component/MiddleHomeScreen.js';
import AboutUs from '../sites/AboutUs.js';
import ContactUs from '../sites/ContactUs.js';
import SideBar from '../component/SideBar.js';
import $ from 'jquery';
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class Navbar extends Component{
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props){
    super(props);
    const { cookies } = props;
    const itemSelectedData = cookies.get("itemSelected");
    this.state = {
      isOnHomePage: true,
      isOnMenuPage: false,
      isAboutUsPage: false,
      isContactUsPage: false,
      numberOfItems: Number(cookies.get("numberOfItems")),
      isSideBarOpen: false,
      itemSelected: itemSelectedData ? itemSelectedData : [],
    }
    this.isNumberOfItemsEmpty();
    this.showSideBar = this.showSideBar.bind(this);
    this.closeSideBar = this.closeSideBar.bind(this);
  }

  isNumberOfItemsEmpty(){
    if(isNaN(this.state.numberOfItems)){
      this.state.numberOfItems = 0;
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

    if (this.state.isContactUsPage){
      this.state.isContactUsPage = false;
    }

    if (this.state.isSideBarOpen){
      this.state.isSideBarOpen = false;
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

  showContactUsPage(){
    this.setState({isContactUsPage: false});
    this.resetStates();
    this.setState({
      isContactUsPage: !this.state.isContactUsPage
    })
  }

  incrementNumberOfItems(){
    const { cookies } = this.props;
    this.setState({numberOfItems: this.state.numberOfItems + 1});
    cookies.set("numberOfItems", 1 + this.state.numberOfItems, { path: "/", maxAge: 3600});
  }

  decrementNumberOfItems(){
    const { cookies } = this.props;
    this.setState({numberOfItems: this.state.numberOfItems - 1});
    cookies.set("numberOfItems", 1 + this.state.numberOfItems, { path: "/", maxAge: 3600});
  }

  sendObjectToCart(item){
    const { cookies } = this.props;
    this.state.itemSelected.push(item);
    cookies.set("itemSelected", JSON.stringify(this.state.itemSelected), { path: "/", maxAge: 3600});
  }

  saveItemSelected(e){
    const { cookies } = this.props;
    cookies.set("itemSelected", JSON.stringify(e), { path: "/", maxAge: 3600});
  }

  showSideBar(open){
    this.setState({ isSideBarOpen: open });
    if(this.state.isSideBarOpen == false){
      document.body.style.overflowY = "hidden";
    }else{
      document.body.style.overflowY = "scroll";
    }
  }

  closeSideBar(){
    this.setState({ isSideBarOpen: false });
    document.body.style.overflowY = "scroll";
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
          <a href="./App.js">
            <img src = "./images/brodbodenicon.jpeg" className = "brodboden_icon"/>
          </a>
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
                <a class="nav-link" href="#" onClick = {() => this.showContactUsPage()}>Kontakta oss</a>
              </li>
            </ul>
            <i class="fa fa-shopping-cart" onClick = {() => this.showSideBar(true)}/>
            <span className="badge" id='lblCartCount'> {this.state.numberOfItems} </span>
          </div>
        </nav>

      {this.state.isOnHomePage?
        <MiddleHomeScreen/>
      :null}

      {this.state.isOnMenuPage?
          <div>
            <Menu incrementNumberOfItems = {() => this.incrementNumberOfItems()} sendObjectToCart = {(e) => this.sendObjectToCart(e)}/>
          </div>
      :null}

      <div className = {this.state.isSideBarOpen?'fadeIn':'fadeOut'}>
        {this.state.isSideBarOpen?
            <SideBar open = {this.state.isSideBarOpen} onSetOpen = {this.showSideBar} onClose = {this.closeSideBar}
            itemSelected = {this.state.itemSelected}
            decrementNumberOfItems = {() => this.decrementNumberOfItems()}
            incrementNumberOfItems = {() => this.incrementNumberOfItems()}
            saveItemSelected = {(e) => this.saveItemSelected(e)}/>
        :null}
      </div>

      {this.state.isAboutUsPage?
          <div>
            <AboutUs/>
          </div>
      :null}

      {this.state.isContactUsPage?
          <ContactUs/>
      :null}
      </div>
    );
  }
}
export default withCookies(Navbar);
