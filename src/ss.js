import React, { Component } from 'react'
import { Theme } from './context/Theme'
class Temp extends Component{
    static contextType=Theme
    render(){
        console.log(this.context)
        const { isLightTheme, light,dark}=this.context //destructuring object
        const theme=isLightTheme ? light : dark;
        return(
<nav style={{background:theme.ui,color:theme.syntax}}>
    <marquee scrollDelay="5" style={{fontSize:30}}>Algorithms are a way to perform problem solving in efficient manner. Algorithms follow same rule of thumb for every language</marquee>
</nav>

        )
    }
}
export default Temp