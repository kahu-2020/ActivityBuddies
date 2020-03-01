import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions'

class Expiry extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            isExpiry: true
            }
    }

    handleHyperClick = () => {
        this.setState({
            isExpiry: !this.state.isExpiry
        })
    } 


    render() {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(time)
        return (
            <h1>Expired</h1>
        )

        
        
    }
}



export default connect()(Expiry)