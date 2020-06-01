
import React, { Component } from 'react'
import Menu from './Men'
import Navbar from './Menu'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectDish:null
    };
}
onDishSelect(id) {
    this.setState({ selectedDish: id});
}
render(){
    return(
        <React.Fragment>

            <form>
    <h1>Hello {this.state.name}</h1>
                <input onChange={this.change}/>
            </form>
            <Navbar dishes={this.state.dishes}  name={this.state.name}/>
            <Menu dishes={this.state.dishes} onClick={(id) => this.onDishSelect(id)}/>

        </React.Fragment>
    )
}

}
export default Main
