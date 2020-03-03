import React from 'react'
import { register, isAuthenticated } from 'authenticare/client'
import { Link } from 'react-router-dom'

class Register extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            username: '',
            password: '',
            email: '',
            image_url: '',
            about: '',
            favourite_activity: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        register({ // what's register? Do I put all the elements of state i.e user info into this??
            username: this.state.username,
            password: this.state.password, 
            // name: this.state.name,
            // email: this.state.email,
            // image_url: this.state.image_url,
            // about: this.state.about,
            // favourite_activity: this.state.favourite_activity,
        }, {
            baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
        })
            .then((token) => {
                if (isAuthenticated()) {
                    this.props.history.push('/')
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
                    <div className='register-column-two'>
                        <div className='rego-wrapper'>
                            <label>First name:</label>
                            <input className='rego-input' type="text" name="name" onChange={this.handleChange} />
                            
                            <label>Username:</label>
                            <input className='rego-input' type="text" name="username" onChange={this.handleChange} />
                           
                            <label>Password:</label>
                            <input className='rego-input' type="password" name="password" onChange={this.handleChange} />
                           
                            <label>Email:</label>
                            <input className='rego-input' type="text" name="email" onChange={this.handleChange} />
                           
                            <label>Profile photo:</label>
                            <input className='rego-input' type="text" name="image_url" onChange={this.handleChange} />

                            <label>About me:</label>
                            <input className='rego-input' type="text" name="about" onChange={this.handleChange} />
                           
                            <label>Favourite activity:</label>
                            <input className='rego-input' type="text" name="favourite_activity" onChange={this.handleChange} />
                           
                            <br />
                            <button className='rego-button' type='button' onClick={this.handleClick}>Register</button>
                            {/* <Link to="/register"><p className='rego-link'> Login to your account →  </p></Link> */}

                        </div>

                    </div>


                </div>
            </React.Fragment>
        )
    }
}

export default Register
