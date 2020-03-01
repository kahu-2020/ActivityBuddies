import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getLocations } from '../actions/index'
import { setCurrentLocation } from '../actions/index'



class Locations extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.dispatch(getLocations(1)) //(this.props.currentActivity.id) - will get all locationd for the currentActivities.id

    }


    handleClick(location) {
        this.props.dispatch(setCurrentLocation(location)) // sets the global state of currentLocation
    }


    render() {
        console.log('test12')

        return (
            <div className='wrapper'>
                <div className='loc-nav'>
                    <Link className='loc-home' to='/'>Home</Link>
                    <h1 className='loc-hedr'>RIDE</h1>
                </div>

                <div className='wrapperBody'>
                    <div className='imagesWrapper'>
                        <img src="images/makara.png" className='mapImages' alt="Makara pinpointed in Wellington map" />

                    </div>

                    <div className='locationWrapper'>

                        <div className='locationList'>
                            {this.props.locations.map(location => {
                                return <Link to='/meetups' className='links'>
                                    <button className='location-btn' key={location.id} onClick={() => this.handleClick(location)}>{location.name} placeholder</button>
                                </Link>
                            })}
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentActivity: state.currentActivity,
        locations: [{id:1,name:'makara'},{id:1,name:'makara'},{id:1,name:'makara'}],
        // locations: state.locations,
        currentLocation: state.currentLocation
    }
}

export default connect(mapStateToProps)(Locations)