import React, { Component } from 'react'
function func(){
  console.log("I worked")
}
let user={
  first:"Maaz"
}
class App extends Component{       
  render(){
    return <React.Fragment>
      <h4 className="elem">I am {func()}</h4> 

  <p>Hey I am {this.props.key}</p>
    </React.Fragment>
  }
}
export default App;