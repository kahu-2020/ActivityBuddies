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
        this.props.dispatch(getLocations(this.props.currentActivity.id)) //(this.props.currentActivity.id) - will get all locationd for the currentActivities.id
    }

    handleClick(location) {
        this.props.dispatch(setCurrentLocation(location)) // sets the global state of currentLocation
    }

    render() {
        let activity = this.props.currentActivity
        console.log(this.props.locations)

        return (
            <div className='wrapper'>
                <h1>{activity.name}</h1>
                <div className='wrapperBody'>
                    <div className='imagesWrapper'>
                        <img src={activity.photo} className='TrailforksWidgetMap' alt="locations pinpointed on Wellington map" />
                    </div>

                    <div className='locationWrapper'>

                        <div className='locationList'>
                            {this.props.locations.map(location => {
                                return <Link to='/meetups' className='links'>
                                    <button className='btn btn-outline-primary' key={location.id} onClick={() => this.handleClick(location)}>{location.name}</button>
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
        locations: state.locations,
        currentLocation: state.currentLocation
    }
}

export default connect(mapStateToProps)(Locations)