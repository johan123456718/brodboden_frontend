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
        <div className="App">
          <div>
            <img src = "./images/kaffeochdryck.png" className = "kaffeochdryck_img" alt = "coffee and drink image"/>
            <div class = "row">
              <div class = "col text-white">
                <div class = "drinkMenuWindow">
                  {
                    drinks.map((item) =>
                      <div>
                        <h3> {item.drink_title} </h3>
                        <p> Pris: {item.price}:-</p>
                        <p> {item.description} </p>
                      </div>
                    )
                  }
                </div>

                <img src = "./images/mat.png" className = "mat_img" alt = "food image"/>
                <div class = "foodMenuWindow">
                {
                  foods.map((item) =>
                    <div>
                      <h3> {item.food_title} </h3>
                      <p> Pris: {item.price}:-</p>
                      <p>{item.description} </p>
                      {item.time?
                      <p> {item.time} </p>
                      :null}
                    </div>
                  )
                }

                <img src = "./images/mat.png" className = "mat_img" alt = "food image"/>
                <div class = "saladMenuWindow">
                {
                  salads.map((item) =>
                    <div>
                      <h3> {item.salad_title} </h3>
                      <p> Pris: {item.price}:-</p>
                      <p>{item.description} </p>
                    </div>
                  )
                }
                </div>
                <img src = "./images/desert.png" className = "desert_img" alt = "food image"/>
                <div class = "desertMenuWindow">
                {
                  desert.map((item) =>
                    <div>
                      <h3> {item.desert_title} </h3>
                      <p> Pris: {item.price}:-</p>
                      <p>{item.description} </p>
                    </div>
                  )
                }
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Menu;
