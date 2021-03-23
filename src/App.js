import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Navbar from './component/Navbar.js'
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
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar/>

      </div>
    );
  }
}

export default App;
