import React, { Component } from 'react'
import { Theme } from './context/Theme'
class Toggle extends Component{
    static contextType=Theme
    render(){
    
            const  { toggle }  =this.context
            return(
            <button onClick={toggle}>Toggle the theme of Floating text</button>
        );
    }
}
export default Toggle