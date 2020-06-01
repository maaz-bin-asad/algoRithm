const [name,setName]=useState("Maaz")
const [course,upDate2]=useState("B-Tech")
const [count,setCount]=useState(0)
const [update,setUpdate]=useState("There's an update")
const handle=(e)=>{
setName("John")
setCount(count+1)
}
useEffect(()=>{
  console.log("Use effect called")

})
return (<React.Fragment>
<p>Hey I am {name}</p>
<p>Hey I am in {course}</p>
<p>Now My name is {name}</p>
<button onClick={handle}>Change</button>

<p id="root2"></p>

</React.Fragment>
)
}




import React,{ useState,useEffect,Component } from 'react'
import Note from './shared/dishes'
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      noteText:"",
      notes:[]

    }
  }
upDate=(noteText)=>{
this.setState({
  noteText:noteText.target.value
})
  }
  handleKeyPress=(event)=>{
if(event.key==="Enter"){
  let notesArray=this.state.notes;
  notesArray.push(this.state.noteText)
  this.setState({
    noteText:""
  })
  this.textInput.focus();
}
  }
  deleteNode=(index)=>{
    let notesArray=this.state.notes;
    notesArray.slice(index,1);
    this.setState({
      notes:notesArray
    })
  }
  addNote=()=>{
    if(this.state.noteText===''){
      return 
    }
    let notesArray=this.state.notes;
    notesArray.push(this.state.noteText)
    this.setState({
      noteText:""
    })
    this.textInput.focus();
  }
render(){
  let notes=this.state.notes.map((val,key)=>{
    return <Note key={key} text={val}
    deleteNode={()=>{
      this.deleteNode(key)
    }}
    />
  })
  return(
    <div className="container">
      <div className="header">React App</div>
      {notes}
<div className="btn" onClick={this.addNote.bind(this)}>+</div>
<input type="text" ref={((input)=>{this.textInput=input})} value={this.state.noteText} onChange={noteText=>this.upDate(noteText)} onKeyPress={this.handleKeyPress.bind(this)}/>
    </div>
  )
}
}
export default App;


import React, { Component } from 'react'
class Note extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="Note" onClick={this.props.deleteNode}>
{this.props.text}
            </div>
        )
    }
}
export default Note

import React from 'react'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
function App(){
  return(
    <BrowserRouter>
    <div className="App">
      <Menu />
      <Switch>
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} /> 
<Route path="/" exact component={Home} />  
</Switch>
    </div>
    </BrowserRouter>

    
  )
}
const Home=()=>{
  return (
      <div className="Home">
<h2>Welcome to Home page</h2>
      </div>
  )
}
export default App;
//React Routers
import React from 'react'
import {Link} from 'react-router-dom'
const Menu=()=>{
  return (
    <div className="Menu">
      <ul>
        <li ><Link className="list" to="/">Home</Link></li>
        <li><Link to="About" className="list">About</Link></li>
        <li><Link to="Contact" className="list">Array Length Recursion</Link></li>
      </ul>
    </div>
  )
}

export default Menu;
//link

import React from 'react'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import { Component } from 'react'
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      name:"Your name"
    }
  }
  change=(e)=>{
    this.setState(
      {
        name:e.target.value
      }
    )
  }
  render(){
     return(
    <BrowserRouter>
    <div className="App">
      <Menu />
      <Switch>
<Route path="/" exact component={this.Home} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} /> 
  
</Switch>
    </div>
    </BrowserRouter>
    
  )
  

}

Home=()=>{
  return (
      <div className="Home">
<div className="content"><h1>Welcome to Home page</h1></div>
    <div className="content">
      <form>
  <h4>Welcome {this.state.name}</h4>
        <input onChange={this.change} placeholder="Enter your name"/>
        <button id="btn">Enter</button>
      </form>
      </div>
      </div>
  )
}
}
export default App;
