import React, { useState } from 'react'
import Home from './Home'
import FunctionsIcon from '@material-ui/icons/Functions'
import Sorting from './sorting'
import Toggle from './toggle'
import { Switch,Route,BrowserRouter } from 'react-router-dom'
import Searching from './searching'
import Header from './Header'
import { SEARCHING } from './shared/searching'
import { SORTING } from './shared/sorting'
import Footer from './Footer'
import ThemeProvider from './context/Theme'
import Temp from './Float'

const App=()=>{
    const [algo,setName]=useState({

        searching:SEARCHING,
        sorting:SORTING
    })
    
    

      return(

<BrowserRouter>
<div>
    <h1><FunctionsIcon className="svg_icons1"/>algoRithm</h1>
    <h2>This is a website that contains several algorithms in a way that even a beginner understands and realizes the importance of studying algorithms</h2>
    <hr />
    <ThemeProvider>
        <Temp />
        <Toggle />
        </ThemeProvider>
<Header />
<Switch>
    <Route path='/home' component={Home} />
    <Route exact path='/searching' component={()=><Searching searching={algo.searching}/>} />
    <Route exact path='/sorting' component={()=><Sorting sorting={algo.sorting}/>} />
</Switch>
<hr />
<Footer />
</div>
</BrowserRouter>



    )
}
export default App
//Below is the implementation of binary search algorithm to proof 
//that given number is perfect square