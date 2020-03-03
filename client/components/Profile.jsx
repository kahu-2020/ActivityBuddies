import React from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../actions/'
import { getDecodedToken } from 'authenticare/client'

class Profile extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.dispatch(getProfile(getDecodedToken().id))
    }


    render() {
        let profile = this.props.profile
        let userPosts = this.props.userPosts
        console.log(this.props.userPosts)
        return (
            <div className='profileWrapper'>
                <div className='profColOne'>
                    <img className='profImg' src={profile.image_url} alt="" />
                    <div className='profInfo'>
                        <h2> {profile.name} </h2>
                        <p>{profile.email}</p>
                        <h4>A bit about me</h4>
                        <p>{profile.about}</p>
                        <h4>My favourite activity is</h4>
                        <p>{profile.favourite_activity}</p>
                    </div>
                </div>
                <div className='profColTwo'>
                    {/*map through props of posts and display some info.... */}
                    {userPosts.map(post => {
                        return (
                            <div>
                                <p>{post.dateTime}</p><br />
                                <p>{post.tracks}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profile,
        userPosts: state.postList
    }
}

export default connect(mapStateToProps)(Profile) 