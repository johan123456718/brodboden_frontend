import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Navbar from './component/Navbar.js';
import Footer from './component/Footer.js';
import $ from 'jquery';
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      isOnMenuPage: props.isOnMenuPage
    }
  }

  componentDidMount() {
    var distance = $('.App').offset().top;
    $(document).scroll(function() {
      if ($(this).scrollTop() > distance) {
        // > 100px from top - show div
          $('#blue-box').fadeIn("slow");
        }else{
          $('#blue-box').hide();
        }
    });
    $(document).ready(function() {
      $('#blue-box').click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
      });
    });
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
        <Footer/>
        <img src = './images/point.png'  id="blue-box"/>
      </div>
    );
  }
}

export default App;
