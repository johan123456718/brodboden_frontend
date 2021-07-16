import React, { Component } from "react";
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

  render(){
    const {error, isLoaded, drinks, foods, desert, salads} = this.state;
    if(error){
       return <div>Kunde inte ladda in datat</div>
    }if (!isLoaded) {
      return <div>Loading ...</div>
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
                   <strong className = "itemTextInliner">{item.drink_title}</strong>
                   <span className = "itemTextInliner lineBetweenItem">.......................................................................................</span>
                   <p className = "itemTextInliner itemPriceColor">{item.price} kr</p>
                   <div class = "item_description_container">
                    <p className = "item_description">{item.description} </p>
                   </div>
                 </div>
                )
              }
            </div>
            <div class="col">
              <img src = "./images/mat.png" className = "coffeeAndDrink_img" alt = "food image"/>
              {
                  foods.map((item) =>
                    <div>
                      <img src = {item.picture_data} class = "item_pic" alt = "item image"/>
                      <strong className = "itemTextInliner"> {item.food_title} </strong>
                      <span className = "itemTextInliner lineBetweenItem">.......................................................................................</span>
                      <p className = "itemTextInliner itemPriceColor">{item.price} kr</p>
                      <div class = "item_description_container">
                        <p className = "item_description">{item.description} </p>
                        {item.time?
                        <p className = "item_time"> Tid: {item.time} </p>
                        :null}
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
                     <strong className = "itemTextInliner"> {item.salad_title} </strong>
                     <span className = "itemTextInliner lineBetweenItem">.......................................................................................</span>
                     <p className = "itemTextInliner itemPriceColor">{item.price} kr</p>
                     <div class = "item_description_container">
                      <p className = "item_description">{item.description} </p>
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
                     <strong className = "itemTextInliner"> {item.desert_title} </strong>
                     <span className = "itemTextInliner lineBetweenItem">.......................................................................................</span>
                     <p className = "itemTextInliner itemPriceColor">{item.price} kr</p>
                     <div class = "item_description_container">
                      <p className = "item_description">{item.description} </p>
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
