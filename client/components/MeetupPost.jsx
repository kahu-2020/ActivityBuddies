import React from 'react'
import Rsvp from './Rsvp'

class MeetupPost extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="meetupCard">
                <h3> {this.props.currentPost.tracks} - {this.props.currentPost.user_name} </h3>
                <p className="meetupSkill"> <span> Skill level: </span> {this.props.currentPost.skill} </p>
                <p className="meetupTime"> <span> Meet at: </span> {this.props.currentPost.dateTime} </p>
                <p className="meetupNotes"> <span> Notes: </span> {this.props.currentPost.notes} </p>
                <Rsvp />
            </div>
        )
    }
}

export default MeetupPost