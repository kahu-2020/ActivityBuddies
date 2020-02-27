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
        return (
            <div className='wrapper'>

                <div className='WellingtonImgs'>
                    <img src="images/makaraMap.png" alt="Makara pinpointed in Wellington map" />
                    <img src="images/polhillMap.png" alt="Polhill pinpointed in Wellington map" />
                    <img src="images/mtVicMap.png" alt="MtVic pinpointed in Wellington map" />
                </div>

                <div className='locationWrapper'>
                    <h1>Mountain Biking</h1>
                    <h2>Locations to choose from</h2>
                    <div className='locationList'>
                        {this.props.locations.map(location => {
                            // return <Link to='/locationMeetup'>  check with ethan this is the right view
                                <p key={location.id} onClick={() => this.handleClick(location)}>{location.name}</p>
                            // </Link>
                        })}
                    </div>

                </div>


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