import React, { createContext, Component } from 'react'
export const Theme =createContext();
class ThemeProvider extends Component{
    state={
isLightTheme:true,
light:{
    syntax:'#555',ui:'#ddd', bg:'#eee'
},
dark:{syntax:'#ddd',ui:'#333',bg:'#555'}
    }
    toggle=()=>{
        this.setState({isLightTheme:!this.state.isLightTheme})
    }
    render(){
        return(
<Theme.Provider value={{...this.state,toggle:this.toggle}}>
{this.props.children}
</Theme.Provider>
        )
    }
}
export default ThemeProvider