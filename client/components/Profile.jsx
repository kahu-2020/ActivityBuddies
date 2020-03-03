import React from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../actions/'
import {getDecodedToken} from 'authenticare/client'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount () {
        // console.log()
        this.props.dispatch(getProfile(getDecodedToken().id))
    }

    //make a dispatch to an action that calls our api. I like just having it all in one, and not having it in an API file, because then you don't have to import / export.

    render() {

        return(
            <button> {this.props.profile.name} </button>
        )
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Profile)