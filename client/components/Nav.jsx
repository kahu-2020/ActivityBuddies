import React from 'react'
import { Link } from 'react-router-dom'
import { IfNotAuthenticated, IfAuthenticated } from './Authenticated'
import { logOff } from 'authenticare/client'


class Nav extends React.Component {
    
    logout = () => {
        logOff()
        .then(
            window.location.reload(false)
        )
    }

    render() {
        return (

            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <IfNotAuthenticated><li><Link to="/login">Login</Link></li></IfNotAuthenticated>
                <IfAuthenticated><li onClick={logOff}>Logoff</li></IfAuthenticated>
                <IfNotAuthenticated><li><Link to="/register">Register</Link></li></IfNotAuthenticated>
            </ul>
            
        )
    }
}

export default Nav
