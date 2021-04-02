import React, { Component } from "react";
class Menu extends Component{

  constructor(props){
    super(props);
    this.state = {
      isOnLogPage: false,
      isOnMessagePage: true,
      inputUpdated: false,
      showLogin: false,
      showLogout: true,
      notLoggedIn: false,
    }
  }

  render(){
    return (
      <div className="App">
        <img src="./images/middlescreenimg.png" class="img-fluid" alt="Responsive image"/>
        <div class="centered">Tasty coffee</div>
      </div>
    );
  }
}

export default Menu;
