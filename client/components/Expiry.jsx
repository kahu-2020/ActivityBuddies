import React from 'react'
import { connect } from 'react-redux'

import { getUpComingPosts } from '../actions/postListActions'

import MeetupPost from './MeetupPost'

class Expiry extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            isExpiry: true
            }
    }

    componentDidMount() {
        
        this.props.dispatch(getUpComingPosts(this.props.currentLocation)) //dispatch the action from postListActions
    }



    render() {
        let today = new Date();
            let upPosts = this.props.upcomingposts.filter((newestpost) => {
                // newestpost is array of all postsby location
                    let postTime = new Date(newestpost.dateTime.split(' ').join(''))
                    // postTime variable format time of a post in yymmdd hh:mm
                    // delete space between date and T
                        return postTime.getTime() > today.getTime()
                        //comparing time posted and current date+time
            })

            return (
                <div>
                    <h1>Upcoming posts</h1>
                    <div className="cardList">
                    {upPosts.map((function upComingPost(newestpost, idx) {
                        return <MeetupPost key={idx} currentPost={newestpost} />})
                    )}
                    </div>
                </div>
            )         
    }
}

function mapStateToProps(state) {
    return {
        upcomingposts: state.postList, // from  PostListReduer reducer
        currentLocation :state.currentLocation // from  currentLocation reducer
    }
}

export default connect(mapStateToProps)(Expiry)