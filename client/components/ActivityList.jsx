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
        return (
            <div className='activity-container'>
                {this.props.activities.map(activity => {
                    return < p className='act-btn'  key={activity.id}>{activity.name}</p>
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
