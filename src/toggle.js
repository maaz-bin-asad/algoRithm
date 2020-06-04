import React, { Component } from 'react'
import { Theme } from './context/Theme'
import { AuthContext } from './context/AuthContext'
class Toggle extends Component{
    render(){
    return(
        <AuthContext.Consumer>{(authContext)=>(
            <Theme.Consumer>{(themeContext)=>{
                const { isAuthenticated,toggleAuth }=authContext;
                const { isLightTheme,light,dark }=themeContext;
                const theme=isLightTheme ? light : dark;
                return(
                    <div>
                    <button style={{background:theme.ui,color:theme.syntax}}>
                    </button>
                    <div>
                        {isAuthenticated ? console.log("Loggedin") : console.log("Logged out")}
                    </div>
                    <button onClick={toggleAuth}></button>
                    </div>
                )
            }}

            </Theme.Consumer>
        )}
        </AuthContext.Consumer>
    )
    }
}
export default Toggle