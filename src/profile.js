import React, { Component } from 'react'
class Profile extends Component{
constructor(props){
    super(props)
    
}
render(){
    return(

        <React.Fragment>
            <h1>Hello {this.props.user}</h1>
        <div>You are studying in XYZ college</div>
        <div>Your recent Posts</div>
        </React.Fragment>
    )
}
}
export default Profile