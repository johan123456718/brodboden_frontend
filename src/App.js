import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Navbar from './component/Navbar.js';
import Footer from './component/Footer.js';
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      isOnMenuPage: props.isOnMenuPage
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
        <Footer/>
      </div>
    );
  }
}

export default App;
