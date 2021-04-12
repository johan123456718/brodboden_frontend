import React, { Component } from "react";
import './css/ContactUs.css';
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
        <div className = "contactUs-container">
          <img src="./images/x.jpg" class="img-fluid w-100" alt="Responsive image"/>
          <div className = "leftWindow">
            <h3 className = "titleForAddress"> Kontakta oss</h3>
            <p>Använd formuläret nedan för att skicka ett meddelande till oss. Vi svarar inom 1-2 arbetsdagar</p>
            <p>Du kan också skicka ett e-postmeddelande till oss när som helst eller ring oss, tveka inte att höra av dig!</p>
            <div className = "leftSubWindow">
            <h3 className = "dropUsText">Skicka ett meddelande till oss</h3>
            <form>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Ditt namn</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ditt namn"/>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Din Email adress</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Ditt meddelande</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ditt meddelande"></textarea>
                </div>
                  <button type="submit" class="btn btn-primary">Skicka</button>
                </form>
            </div>
          </div>
          <div className = "rightWindow">
            <h3 className = "titleForAddress"> Vi finns på</h3>
            <p> Brödboden ligger i Märsta Centrum, precis höger om busshållplatsen.</p>
            <div className = "rightSubWindow float-left">
              <i class="fa fa-map-marker fa-lg" aria-hidden="true"/>
              <h4> Våran adress </h4>
              <p>Nymärsta torg 5, 195 30 Märsta</p>
            </div>

            <div className = "float-right">
              <i class="fa fa-phone fa-lg" aria-hidden="true"/>
              <h4> Telefon </h4>
              <p>08-591 211 35</p>

              <i class="fa fa-envelope fa-lg" aria-hidden="true"/>
              <h4> Email </h4>
              <p>yyyy@hotmail.com</p>
            </div>
            <div class="justify-content-center">
              <iframe src="http://maps.google.com/maps?q=59.620010,17.855660&z=16&output=embed" height="450" width="500" class = "d-flex justify-content-center"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
