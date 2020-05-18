import React, { Component } from 'react'
import Marks from './App2'
export default class Student extends Component{
  constructor(props){
    super(props)
    this.state={
      roll:101
    }
  }
  handleClick=()=>{
    console.log(this.state.roll)
    this.setState({roll:this.state.roll+1})
  }
  render(){
    return <div>
      <Marks roll={this.state.roll}/>
      <button onClick={this.handleClick}>Change</button>
    </div>
  }
}