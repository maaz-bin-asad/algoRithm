import React from 'react'
import {Link} from 'react-router-dom'
const Header=()=>{
    return(
        
        <div className="header">
            <ul className='box'>
                <li><Link to="home">Home</Link></li>
                <li><Link to="/searching">Searching</Link></li>
                <li><Link to="/sorting">Sorting</Link></li>
                <li><Link to="/greedy">Greedy</Link></li>
                <li><Link to="/number">Number</Link></li>
            </ul>
        </div>
    )
}               
export default Header