import React, { Component } from 'react'
function func() {
  console.log("I worked")
}
let user = {
  first: "Maaz"
}
document.getElementById('button').addEventListener('click',(event)=>{
  console.log(" I have been trigered by the newly created element")
  console.log(event.clientX)
})

let arr = [1, 2, 3]
class App extends Component {
  constructor() {
    super()
  }
  render() {
    return <React.Fragment>
      <h4 className="elem">I am {func()}</h4>

      <p>Hey I am {this.props.hey}</p>
      <p>Hey I am being written</p>
      <p>Hey I am a {user.first}</p>
      <h1>Hey I am a new {arr[1]}</h1>
      <p>I would like to call this function {document.getElementById('root').addEventListener('click', (e)=>{
        console.log("hey i am clicked")
        console.log(e.target)
      })}</p>
    </React.Fragment>
  }
}
export default App;