import React from 'react'
import MeetupPost from './MeetupPost'

import { connect } from 'react-redux'


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
        console.log(e.target.value)
        this.setState({
            skillLevel: e.target.value
        })
    }

    render() {


        // ---- if MeetupPost does not == state (skill level) then make MeetupPost dull opacity ----
        // 
        let postCardStyle = {className}        
        let skillLevel = ''
        if (this.state.skillLevel !== skillLevel){
           {postCardStyle = {className}}
         }


        return (
            <div className="meetupList">
                <h2>Meetups</h2>
                
                <form>
                    <select value={this.setState.skillLevel} onChange={this.handleChange}>
                        <option value="">--Select your skill level--</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                    </select>
                    <input type="submit" value ="submit"/>
                </form>
                
                <button onClick={this.props.handleClick} className="addButton"> + </button>

                <div className="cardList">
                    {this.props.posts.map((post, i) => {
                        return <MeetupPost key={i} currentPost={post} />
                    })}
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

export default connect(mapStateToProps)(MeetupList)