import React from 'react'
import MeetupList from './MeetupList'
import AddPostForm from './AddPostForm'

import { connect } from 'react-redux'
import { gotPostsByLocationID } from '../actions/postListActions'

//check if the user is authenticated.


//check if the user is authenticated.


class LocationMeetups extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentDifficulty: 0,
            addingMeetup: false,
        }
    }

    activateMeetingForm = () => {
        this.setState({
            addingMeetup: true
        })
    }

    deactivateMeetingForm = () => {
        this.setState({
            addingMeetup: false
        })
    }

    componentDidMount() {
        this.props.dispatch(gotPostsByLocationID(this.props.location.id))
    }

    render() {

        return (
            <React.Fragment>
                <div className="LocationMeetupHeader">
                    <h1> {this.props.location.name} </h1>
                </div>

                <div className="LocationMeetupContainer">
                    <div className="widgetWrapper">
                        {
                            this.props.currentActivity.id == 1 
                                ? <React.Fragment><link href="//www.surf-forecast.com/stylesheets/widget.css" className='TrailforksWidgetMap' media="screen" rel="stylesheet" type="text/css" /><div class="wf-width-cont surf-fc-widget"><div class="widget-container"><div class="external-cont"><iframe class="surf-fc-i" allowtransparency="true" src={this.props.location.widget} scrolling="no" frameborder="0" marginwidth="0" marginheight="0"></iframe></div></div></div></React.Fragment> 
                                : <iframe className='TrailforksWidgetMap' src={this.props.location.widget} scrolling="no" frameborder="0" allowfullscreen="1" width="400px" height="800px" id="map0" />
                        }
                    </div>

                    <div className="postListingWrapper">

                        {this.state.addingMeetup ? <AddPostForm goBack={this.deactivateMeetingForm} /> : <MeetupList handleClick={this.activateMeetingForm} posts={'hi'} />}

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.postList,
        location: state.currentLocation,
        currentActivity: state.currentActivity,
    }
}

export default connect(mapStateToProps)(LocationMeetups)




