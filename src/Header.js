import React from 'react'
import {Link} from 'react-router-dom'
const Header=()=>{
    return(
        
        <div className="header">
            <ul className='box'>
                <li><Link to="home" className="link">Home</Link></li>
                <li><Link to="/searching" className="link">Searching</Link></li>
                <li><Link to="/sorting" className="link">Sorting</Link></li>
                <li><Link to="/greedy" className="link">Greedy</Link></li>
                <li><Link to="/number" className="link">Number</Link></li>
            </ul>
        </div>
    )
}               
export default Header