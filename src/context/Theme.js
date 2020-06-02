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
    render(){
        return(
<Theme.Provider value={{...this.state}}>
{this.props.children}
</Theme.Provider>
        )
    }
}
export default ThemeProvider