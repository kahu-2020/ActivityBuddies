import React from 'react'
import MeetupList from './MeetupList'
import AddPostForm from './AddPostForm'

import { connect } from 'react-redux'
import { gotPostsByLocationID } from '../actions/postListActions'

//check if the user is authenticated.


//check if the user is authenticated.


class LocationMeetups extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            currentDifficulty: 0,
            addingMeetup: false,
        }
    }

    activateMeetingForm = () => {
        this.setState({
            addingMeetup: true 
        })    
    }

    deactivateMeetingForm = () => {
         this.setState({
            addingMeetup: false 
        })    
    }

    componentDidMount() {
        this.props.dispatch(gotPostsByLocationID(this.props.location.id))
    }

    render() {
        console.log("Rerender.")
        return (
            <React.Fragment>   
                <div className="LocationMeetupHeader">
                    <h1> {this.props.location.name} </h1>
                </div>

                <div className="LocationMeetupContainer">
                    
                    
                    <div className="widgetWrapper">
                        
                        <div className="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="1" data-activitytype="1" data-maptype="terrain" data-trailstyle="difficulty" data-controls="0" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>

                    </div>
                    <div className="postListingWrapper">
                        
                        {this.state.addingMeetup ?   <AddPostForm goBack={this.deactivateMeetingForm} /> : <MeetupList handleClick={this.activateMeetingForm} posts={'hi'} /> }
                    
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postList,
        location: state.currentLocation
    }
}

export default connect(mapStateToProps)(LocationMeetups)

