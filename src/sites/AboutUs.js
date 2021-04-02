import React, { Component } from "react";
class AboutUs extends Component{

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
        <p> hej </p>
      </div>
    );
  }
}

export default AboutUs;
