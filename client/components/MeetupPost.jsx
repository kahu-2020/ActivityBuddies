import React from 'react'

class MeetupPost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0
        }
    }

    buttonClicked = (event) => {
        this.setState({value: this.state.value+1});
      }

    render() {
        return(
            <div className="meetupCard">
                <h3> {this.props.currentPost.tracks} - {this.props.currentPost.user_name} </h3>
                <p className="meetupSkill"> <span> Skill level: </span> {this.props.currentPost.skill} </p>
                <p className="meetupTime"> <span> Meet at: </span> {this.props.currentPost.dateTime} </p>
                <p className="meetupNotes"> <span> Notes: </span> {this.props.currentPost.notes} </p>
                <p>Attendees: {this.state.value}</p>
                <button className="flagButton" onClick={this.buttonClicked}> RSVP </button>

            </div>
        )
    }
}

export default MeetupPost