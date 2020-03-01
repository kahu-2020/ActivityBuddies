import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getLocations } from '../actions/index'
import { setCurrentLocation } from '../actions/index'



class Locations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activity_id: 0
        }
    }



    // if activity id is (x) then render corresponding id page. 


    componentDidMount() {
        this.props.dispatch(getLocations(1)) //(this.props.currentActivity.id) - will get all locationd for the currentActivities.id

    }


    handleClick(location) {
        this.props.dispatch(setCurrentLocation(location)) // sets the global state of currentLocation
    }


    render() {
        return (
            <div className='wrapper'>
                <h1>RIDE</h1>
                <div className='wrapperBody'>
                    <div className='imagesWrapper'>
                        <img src="images/makara.png" className='mapImages' alt="Makara pinpointed in Wellington map" />
                        {/* <img src="images/polhillMap.png" className='mapImages' alt="Polhill pinpointed in Wellington map" />
                    <img src="images/mtVicMap.png" className='mapImages' alt="MtVic pinpointed in Wellington map" /> */}
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
        locations: [{id:1,name:'makara'},{id:1,name:'makara'},{id:1,name:'makara'}],
        // locations: state.locations,
        currentLocation: state.currentLocation
    }
}

export default connect(mapStateToProps)(Locations)