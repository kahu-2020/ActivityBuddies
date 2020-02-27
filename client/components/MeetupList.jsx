import React from 'react'
import MeetupPost from './MeetupPost'

class MeetupList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            testPosts: [1 ,2 , 3, 4, 5, 6, 7, 8]
        }
    }

    render() {
        return (
            <div className="meetupList"> 
                <h2>Meetups</h2>
                <button onClick={this.props.handleClick}> Add Meetup </button>
                {this.state.testPosts.map( (post, i) => {
                    return <MeetupPost key={i} />
                })}
            </div>
        )
    }
}

export default MeetupList