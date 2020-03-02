import React from 'react'
import { connect } from 'react-redux'

import MeetupList from './MeetupList'
// import { fetchData } from '../actions'

class Expiry extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            isExpiry: true
            }
    }

    componentDidMount() {

    }



    render() {
        let today = new Date();
        let currentTime = (today.getYear() + 1900) + '-' + today.getMonth() + '-' + today.getDate() + ' '
        + 'T' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            console.log(currentTime)

        let upComingPost = !this.props.activeSkill || this.props.currentPost.skill == this.props.activeSkill
            // console.log(this.props.currentPost.skill)
        
            return (
                <div>
                    <h1>Expired</h1>
                    <div className="cardList">
                    {this.props.posts.filter((upComingPost => {
                        console.log(dateTime)
                        return <MeetupList key={i} currentPost={post} activeSkill={this.state.skillLevel} expiry={upComingPost > currentTime} />})
                    )}
                    </div>
                </div>
            )         
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postList
    }
}

export default connect(mapStateToProps)(Expiry)