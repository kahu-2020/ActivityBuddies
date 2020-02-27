import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getActivities } from '../actions/index'


class ActivityList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(getActivities())
    }

    render() {
        console.log(this.props.activities)
        return (
            <div>
                {this.props.activities.map(activity => {
                    return <p>{activity.name}</p>
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activities: state.activities,

    }
}

export default connect(mapStateToProps)(ActivityList)
