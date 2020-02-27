import React from 'react'
import { connect } from 'react-redux'

// import { actionName } from '../actions/index'



class Locations extends React.Component {
    constructor(props) {
        super(props)
       
        // this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        // this.props.dispatch(getLocations(this.props.currentActivity.id))

    }


    handleClick() {
    //    this.props.dispatch(setLocation(this.props.locations.id))
    }



    render() {

        return (
            <div>
                <h1>Mountain Biking</h1>
                <h2>Locations</h2>
                
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
       currentActivity: state.currentActivity, 
       locations: state.locations, 
       currentLocation: state.currentLocation
    }
}

export default connect(mapStateToProps)(Locations)