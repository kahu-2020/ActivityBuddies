import React from 'react'

class MeetupPost extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="meetupCard">
                <h3> {this.props.currentPost.tracks} </h3>
                <h4> {this.props.currentPost.user_name} </h4>
                <p className="meetupSkill"> <span> Skill level: </span> {this.props.currentPost.skill} </p>
                <p className="meetupTime"> <span> Meet at: </span> {this.props.currentPost.dateTime} </p>
                <p className="meetupNotes"> <span> Notes: </span> {this.props.currentPost.notes} </p>
            </div>
        )
    }
}

export default MeetupPost