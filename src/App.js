import React, { useState } from 'react'
import Home from './Home'
import FunctionsIcon from '@material-ui/icons/Functions'
import Sorting from './sorting'
import Greedy from './greedy'
import Toggle from './toggle'
import { Switch,Route,BrowserRouter } from 'react-router-dom'
import Searching from './searching'
import Header from './Header'
import { SEARCHING } from './shared/searching'
import { GREEDING } from './shared/greedy'
import { SORTING } from './shared/sorting'
import Footer from './Footer'
import ThemeProvider from './context/Theme'
import Temp from './Float'
import AuthContextProvider from './context/AuthContext'

const App=()=>{
    const [algo,setName]=useState({

        searching:SEARCHING,
        sorting:SORTING,
        greeding:GREEDING
    })
    
    

      return(

<BrowserRouter>
<div>
    <h1><FunctionsIcon className="svg_icons1"/>algoRithm</h1>
    <h2>This is a website that contains several basic algorithms</h2>
    <hr />
    <ThemeProvider>
    <Temp />
    </ThemeProvider>
<Header />
<Switch>
<ThemeProvider>
        <AuthContextProvider>
        
        <Toggle />
    <Route path='/home' component={Home} />
    <Route exact path='/searching' component={()=><Searching searching={algo.searching}/>} />
    <Route exact path='/sorting' component={()=><Sorting sorting={algo.sorting}/>} />
    <Route exact path='/greedy' component={()=><Greedy greeding={algo.greeding}/>} />
    
    </AuthContextProvider>
        </ThemeProvider>
</Switch>
<hr />
<Footer />
</div>
</BrowserRouter>



    )
}
export default App
