import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import './css/Menu.css';

class Menu extends Component{

  constructor(props){
    super(props);
    this.state = {
      drinks: [],
      foods: [],
      desert:[],
      salads:[],
      isLoaded: false,
      visible: false,
      currentTitle: "",
      currentPrice: 0,
      currentTime: "",
      currentImg: "",
    }
  }

  componentDidMount(){
      this.fetchDrinks();
      this.fetchFood();
      this.fetchSalads();
      this.fetchDesert();
  }

  fetchDrinks(){
    fetch("http://localhost:8080/demo/allDrinks", {
      method: "GET",
    }).then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            drinks: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  fetchFood(){
    fetch("http://localhost:8080/demo/allFoods", {
      method: "GET",
    }).then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            foods: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  fetchSalads(){
    fetch("http://localhost:8080/demo/allSalads", {
      method: "GET",
    }).then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            salads: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  fetchDesert(){
    fetch("http://localhost:8080/demo/allDeserts", {
      method: "GET",
    }).then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            desert: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  sendToCart(item){
    this.state.currentImg = item.picture_data;

    if(item.time !== undefined){
      this.state.currentTitle = item.title;
      this.state.currentPrice = item.price;
      this.state.currentDescription = item.description;
      this.state.currentTime = item.time;
      console.log(item.title + " price: " + item.price + " description: " + item.description + " time: " + item.time);
    }else{
      this.state.currentTitle = item.title;
      this.state.currentPrice = item.price;
      this.state.currentDescription = item.description;
      console.log(item.title + " price: " + item.price + " description: " + item.description);
    }
    this.props.incrementNumberOfItems();
    this.props.sendObjectToCart(item);
    this.setState({visible: true});
    setTimeout(() => this.setState({ visible: false}), 3000);
  }

  reloadPage(){
    window.location.reload(false);
  }

  render(){
    const {error, isLoaded, drinks, foods, desert, salads} = this.state;
    if(error){
       return (
        <div>
          <Button variant="outline-secondary" onClick = {() => this.reloadPage()}>Ladda om sidan?</Button>
        </div>
      )
    }if (!isLoaded) {
      return (
        <div class="spinner-border text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )
    }else{

      return (
        <div class="menuContainer">
          <div class="row">

            <div class="col">
              <img src = "./images/kaffeochdryck.png" className = "coffeeAndDrink_img" alt = "coffee and drink image"/>
              {
                drinks.map((item) =>
                  <div>
                   <img src = {item.picture_data} class = "item_pic" alt = "food image"/>
                   <strong className = "itemTextInliner">{item.title}</strong>
                   <span className = "itemTextInliner lineBetweenItem">.......................................................................................</span>
                   <p className = "itemTextInliner itemPriceColor">{item.price} kr</p>
                   <div class = "item_description_container">
                    <p className = "item_description">{item.description} </p>
                    <Button variant="outline-secondary" onClick = {() => this.sendToCart(item)}>Lägg i kundvagnen</Button>
                   </div>

                 </div>
                )
              }
            </div>
            <div class="col">

              <div className={this.state.visible?'topcorner fadeIn': 'topcorner fadeOut'}>
                <img src = {this.state.currentImg} class = "item_pic" alt = "food image"/>
                <p>Vald vara: {this.state.currentTitle}</p>
                <p>Pris: {this.state.currentPrice}</p>
                {this.state.currentTime?
                <p> Tid: {this.state.currentTime} </p>
                :null}
              </div>

              <img src = "./images/mat.png" className = "food_img" alt = "food image"/>
              {
                  foods.map((item) =>
                    <div>
                      <img src = {item.picture_data} class = "item_pic" alt = "item image"/>
                      <strong className = "itemTextInliner"> {item.title} </strong>
                      <span className = "itemTextInliner lineBetweenItem">.......................................................................................</span>
                      <p className = "itemTextInliner itemPriceColor">{item.price} kr</p>
                      <div class = "item_description_container">
                        <p className = "item_description">{item.description} </p>
                        {item.time?
                        <p className = "item_time"> Tid: {item.time} </p>
                        :null}

                        <Button variant="outline-secondary" onClick = {() => this.sendToCart(item)}>Lägg i kundvagnen</Button>
                      </div>
                    </div>
                  )
              }
            </div>
            <div class="w-100 h-25"></div>
            <div class="col">
              <img src = "./images/sallad.png" className = "salad_img" alt = "salad image"/>
              {
                 salads.map((item) =>
                   <div>
                     <img src = {item.picture_data} class = "item_pic" alt = "item image"/>
                     <strong className = "itemTextInliner"> {item.title} </strong>
                     <span className = "itemTextInliner lineBetweenItem">.......................................................................................</span>
                     <p className = "itemTextInliner itemPriceColor">{item.price} kr</p>
                     <div class = "item_description_container">
                      <p className = "item_description">{item.description} </p>
                      <Button variant="outline-secondary" onClick = {() => this.sendToCart(item)}>Lägg i kundvagnen</Button>
                     </div>
                   </div>
                 )
              }
            </div>
            <div class="col">
              <img src = "./images/desert.png" className = "desert_img" alt = "desert image"/>
              {
                 desert.map((item) =>
                   <div>
                     <img src = {item.picture_data} class = "item_pic" alt = "item image"/>
                     <strong className = "itemTextInliner"> {item.title} </strong>
                     <span className = "itemTextInliner lineBetweenItem">.......................................................................................</span>
                     <p className = "itemTextInliner itemPriceColor">{item.price} kr</p>
                     <div class = "item_description_container">
                      <p className = "item_description">{item.description} </p>
                      <Button variant="outline-secondary" onClick = {() => this.sendToCart(item)}>Lägg i kundvagnen</Button>
                     </div>
                   </div>
                 )
               }
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Menu;
