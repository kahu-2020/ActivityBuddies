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
                    return <Link className='act-btn hover-1' path='/Locations'>< p   key={activity.id}>{activity.name}</p></Link>
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
