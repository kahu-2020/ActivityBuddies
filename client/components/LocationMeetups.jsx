import React from 'react'
import MeetupList from './MeetupList'


class LocationMeetups extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            currentDifficulty: 0,
            addingMeetup: false,
            widgeSatalitte: false
        }
    }

    render() {
        return (
            <React.Fragment>   
                <div className="LocationMeetupContainer">
                    <h1> this is the location. </h1>
                    <div className="widgetWrapper">
                        {}

                        <div class="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="1" data-activitytype="1" data-maptype="terrain" data-trailstyle="difficulty" data-controls="0" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>
                        <a href="https://www.trailforks.com/">Trailforks.com</a>
                    </div>
                    <div className="postListingWrapper">
                        <MeetupList/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LocationMeetups

<div class="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="1" data-activitytype="1" data-maptype="satellite" data-trailstyle="difficulty" data-controls="0" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>
<div class="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="1" data-activitytype="1" data-maptype="satellite" data-trailstyle="difficulty" data-controls="0" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>
<div class="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="1" data-activitytype="1" data-maptype="satellite" data-trailstyle="difficulty" data-controls="0" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>00px" data-h="800px" data-rid="1" data-activitytype="1" data-maptype="satellite" data-trailstyle="difficulty" data-controls="0" <div class="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="1" data-activitytype="1" data-maptype="satellite" data-trailstyle="difficulty" data-controls="0" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>bels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>
<div class="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="1" data-activitytype="1" data-maptype="satellite" data-trailstyle="difficulty" data-controls="0" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>
*/

