import React, { Component } from "react";
class ContactUs extends Component{

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
        <p> då </p>
      </div>
    );
  }
}

export default ContactUs;
