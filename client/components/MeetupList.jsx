import React from 'react'
import MeetupPost from './MeetupPost'

import { connect } from 'react-redux'

import { IfAuthenticated } from './Authenticated'

class MeetupList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            testPosts: [1, 2, 3, 4, 5, 6, 7, 8],
            skillLevel: ""
        }

        this.handleChange = this.handleChange.bind(this)

    }



    handleChange = (e) => {
        this.setState({
            skillLevel: e.target.value
        })
    }

    render() {

        return (
            <div className="meetupList">
                <h2>{this.props.location.name} meetups</h2>
                
                <form className="">
                    <select className="skillDropdown" value={this.setState.skillLevel} onChange={this.handleChange}>
                        <option value="">--Select your skill level--</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                    </select>
                </form>
                
                <button onClick={this.props.handleClick} className="addButton"> + </button>

                <div className="cardList">
                    {this.props.posts.map((post, i) => {
                        return <MeetupPost key={i} currentPost={post} activeSkill={this.state.skillLevel}  />
                    })}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        posts: state.postList,
        location: state.currentLocation
    }
}

export default connect(mapStateToProps)(MeetupList)