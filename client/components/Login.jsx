import React from 'react'
import {signIn, isAuthenticated} from 'authenticare/client'

class Login extends React.Component {
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

    handleClick = (e) => {
        e.preventDefault()
        console.log("Gets past something.")
        console.log(this.state.username, this.state.password)

        signIn({
            username: this.state.username,
            password: this.state.password
        }, {
            baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
          })
        .then((token) => {
            if(isAuthenticated()) {
                this.props.history.push('/')
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="login-wrapper">
                    <p> Login </p>
                    <input type="text" name="username" onChange={this.handleChange} />
                    <input type="password" name="password" onChange={this.handleChange} />
                    

                    <button type='button' onClick={this.handleClick}>Register</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Login