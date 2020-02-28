import React from 'react'
import MeetupList from './MeetupList'
import AddPostForm from './AddPostForm'

import { connect } from 'react-redux'
import { gotPostsByLocationID } from '../actions/postListActions'
import  BikeWidget from './widgets/BikeWidget'

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
                        
                       <BikeWidget location={this.props.location.id} />

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

