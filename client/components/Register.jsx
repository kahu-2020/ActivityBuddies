import React from 'react'
import { register, isAuthenticated } from 'authenticare/client'
import { Link } from 'react-router-dom'

class Register extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        register({
        username: this.state.username,
        password: this.state.password
        }, {
        baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
        })
        .then((token) => {
            if (isAuthenticated()) {
                window.location.reload(false)
            }
        })
    }

    render() {
        return (
        <React.Fragment>
            <div className="register-wrapper">
                <div className="register-column-one">
                    <h2> Create An Account </h2>
                </div>
                <div className='register-column-two'>'
                    <div className='rego-wrappr'>
                        <p> Register </p>
                        <input type="text" name="username" onChange={this.handleChange} />
                        <input type="password" name="password" onChange={this.handleChange} />
                    
                        <button type='button' onClick={this.handleClick}>Register</button>
                        <Link to="/login"><p className='rego-link'> Create your account →  </p></Link>

                    </div>

                </div>
                    

            </div>
        </React.Fragment>
        )
    }
    }

    export default Register
