import { DISHES } from './shared/dishes';
import { render } from '@testing-library/react';
import React,{ Component } from 'react'
import Menu from './App'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
        dishes:DISHES
    }
    render()
    {
return(
    <div>
  <Menu dishes={this.state.dishes} />
  </div>
)}
}
}
export default App