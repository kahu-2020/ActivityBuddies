import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className='navo'>
                <h2 className="navTitle">BUDS</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link to={'/'}><button className="nav-link">Home</button></Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            
        )
    }
}

export default Nav
