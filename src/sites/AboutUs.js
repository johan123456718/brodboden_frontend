import React, { Component } from "react";
import './css/AboutUs.css';
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
          <div className = "aboutUs-container">
            <img src="./images/y.png" className = "img-aboutUs" alt="Responsive image"/>
            <h1 className = "aboutUs-title">Brödboden</h1>
            <div className = "row justify-content-center">
              <div className = "content-aboutUs">
                <p>Brödboden ligger i Märsta centrum, Sigtuna kommun.</p>
                <p>Brödboden är ett konditori i Märsta där du kan fika och slappna av från jobbiga stunder med någon dryck och ett gott bakverk. </p>
                <p>Dessa bakelser bakas av en konditor i Märsta. </p>
                <p>Kom förbi idag med dina nära och kära.</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default AboutUs;
