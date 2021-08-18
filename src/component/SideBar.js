import React, { Component } from "react";
import './css/SideBar.css';
import Sidebar from "react-sidebar";
import { Button } from 'react-bootstrap';
import InputSpinner from 'react-bootstrap-input-spinner'

class SideBar extends Component{

  constructor(props){
    super(props);
    this.state = {
      onSetOpen: props.onSetOpen,
      open: props.open,
      onClose: props.onClose,
      itemSelected: props.itemSelected,
      totalPrice: 0,
      nrOfItems: 0,
    }
    this.countTotalPrice();
  }

  countTotalPrice(){
    const {itemSelected} = this.state;
    for(const x of itemSelected){
      this.state.totalPrice += x.price;
    }
  }

  countNrOfCategories(item){
    const {itemSelected} = this.state;

    for(const [i,x] of itemSelected.entries()){
      if(x === item[i]){
          this.state.nrOfItems += 1;
      }
    }
  }

  deleteItem(index){
    const {itemSelected} = this.state;

    for(const [i,x] of itemSelected.entries()){
      const foundIndex = itemSelected.indexOf(x);
      if(i === index){
          itemSelected.splice(foundIndex, 1);
          this.props.saveItemSelected(this.state.itemSelected);
      }
    }
  }
  render(){
    const sidebarStyles = {
      sidebar: {
        background: "white",
        width: 300,
      }
    };
    const {itemSelected} = this.state;
    return (
      <div className="App">
      <Sidebar
        sidebar={
          <div>
            <div className = "sideBarNav">
              <b>Kundvagnen</b>
              <i class="fa fa-times fa-2x pull-right" onClick = {this.state.onClose}></i>
            </div>

            <div className = "itemSelected_div">

              {

              itemSelected.map((item, index) =>

                <div className = "sidebar_col">
                  <div className = "sidebar_img_div">
                    <img src = {item.picture_data} class = "sidebar_item_pic" alt = "food image"/>
                  </div>

                  <div className = "sidebar_content_div">
                    <h4> {item.title}</h4>
                    <h5> {item.price} kr</h5>
                    {item.time?
                    <p> Tid: {item.time} </p>
                    :null}

                  </div>
                  <div className = "sidebar_quantity">
                  {this.countNrOfCategories(index)}
                  <InputSpinner
                      type={'int'}
                      precision={2}
                      max={10}
                      min={0}
                      step={1}
                      value={this.state.nrOfItems}
                      onChange={() => console.log("hej")}
                      onDecrease={(e) => this.deleteItem(index)}
                      onIncrease={() => this.props.incrementNumberOfItems()}
                      onMin={() => console.log("hej")}
                      variant={'primary'}
                      size="sm"
                  />
                  </div>
                </div>
              )

              }

            </div>
            <strong>Beställningen hämtas hos oss på Brödboden</strong>

            <div className = "sidebar_checkoutButtonDiv">
            <Button variant="secondary" className = "sidebar_checkoutButton">Beställ nu <span>&#183;</span> {this.state.totalPrice} kr</Button>
            </div>
          </div>
        }
        open={this.state.open}
        onSetOpen={this.state.onSetOpen}
        pullRight={true}
        styles={sidebarStyles}
        >
        </Sidebar>
      </div>
    );
  }
}

export default SideBar;
