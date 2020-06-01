import React , { Component } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function Footer(props){
    return (
<div className="footer">
    <div className="container">
        <ul>
            <h2>Contact me</h2>
            <li><a href="https://github.com/"><GitHubIcon className="svg_icons"/></a></li>
            <li><a href="https://www.facebook.com/"><FacebookIcon className="svg_icons"/></a></li>
            <li><a href="https://in.linkedin.com/"><LinkedInIcon className="svg_icons"/></a></li>
        </ul>

    </div>

</div>
    )
}
export default Footer