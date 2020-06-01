import React, { Component } from 'react'
class Navbar extends Component{
  constructor(props){
    super(props)
  }
  render(){
      const tag=this.props.dishes.map(
        (dish)=>{
          if(dish.category==this.props.name){
          return(
            <React.Fragment>
        <p>{dish.category}</p>
          <p>{dish.name}</p>
          </React.Fragment>
          )
          }
        }
      )
      
return(
  <div>
    {tag}
  </div>
)
  }
}
export default Navbar