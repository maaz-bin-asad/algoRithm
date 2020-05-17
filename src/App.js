import React, { Component } from 'react'
import { Card,CardImg,CardImgOverlay,CardBody,CardTitle,CardText } from 'reactstrap';
class Menu extends Component{

  constructor(props){
    super(props);
    this.state={
      select:null
    }
  }
  dishSelect=(dish)=>{

  }
  render(){
    const menu=this.props.dishes.map((dish)=>{  //this function maps every
      return (
        <div className="card" onClick={()=>this.dishSelect(dish)}>
  <div class="card-body">
    <img src="logo.png"></img>
      <h2 class="card-title">{dish.name}</h2>
    <p class="card-text">{dish.description}</p>
    <p class="card-text">{this.props.name}</p>
    <button onClick={this.fun}>Click to know more</button>
  </div>
</div>

      )
      
    });
    return (
      <div>
{menu}
<div>
    <p></p>
</div>
      </div>
    
    
    )
  }

}

export default Menu