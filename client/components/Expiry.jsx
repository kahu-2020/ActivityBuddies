import React from 'react'
import { connect } from 'react-redux'

import { getUpComingPosts } from '../actions'
import MeetupList from './MeetupList'

class Expiry extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            isExpiry: true
            }
    }

    componentDidMount() {
        console.log('mount')
        this.props.dispatch(getUpComingPosts())
    }



    render() {
        let today = new Date();
        let currentTime = (today.getYear() + 1900) + '-' + today.getMonth() + '-' + today.getDate() + ' '
        + 'T' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            console.log(currentTime)

        let upPosts = !this.props.upComingPosts || this.props.dateTime > currentTime
            console.log(upPosts)
        
            return (
                <div>
                    <h1>Expired</h1>
                    <div className="cardList">
                    {this.props.upPosts.filter((upComingPost => {
                        return <MeetupList key={i} currentPost={upComingPosts} activeSkill={this.state.skillLevel} expiry={upComingPost > currentTime} />})
                    )}
                    </div>
                </div>
            )         
    }
}

function mapStateToProps(state) {
    return {
        upcomingposts: state.upComingPosts
    }
}

export default connect(mapStateToProps)(Expiry)