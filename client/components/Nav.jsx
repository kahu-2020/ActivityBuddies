import React from 'react'
import { Link } from 'react-router-dom'
import { IfNotAuthenticated, IfAuthenticated } from './Authenticated'
import { logOff, } from 'authenticare/client'
import Login from './Login'


class Nav extends React.Component {
    
    logout = () => {
        logOff()
       this.props.history.push('/')
    }

    render() {
        return (

            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <IfNotAuthenticated><li><Link to="/login">Login</Link></li></IfNotAuthenticated>
                <IfAuthenticated><li><Link to="/" onClick={this.logout}>Logoff</Link></li></IfAuthenticated>
                <IfNotAuthenticated><li><Link to="/register">Register</Link></li></IfNotAuthenticated>
                <IfAuthenticated><li><Link to="/profile">Profile</Link></li></IfAuthenticated>
            </ul>
            
        )
    }
}

export default Nav
