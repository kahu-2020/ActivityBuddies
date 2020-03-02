import React from 'react'

class BikeWidget extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                {this.props.location == 1 ?
                    (<div className="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="5563" data-activitytype="1" data-maptype="trailforks" data-trailstyle="difficulty" data-controls="1" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>) :
                        this.props.location == 2 ?
                            (<div className="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="5247" data-activitytype="1" data-maptype="trailforks" data-trailstyle="difficulty" data-controls="1" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>) :
                                this.props.location == 3 ?
                                    (<div className="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="5724" data-activitytype="1" data-maptype="trailforks" data-trailstyle="difficulty" data-controls="1" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>) :
                                        null}
            </React.Fragment>
        )
    }
}

export default BikeWidget

/* 

this.props.location = 1 ?
    (<div class="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="5563" data-activitytype="1" data-maptype="trailforks" data-trailstyle="difficulty" data-controls="1" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>) :
        this.props.location = 2 ?
            (<div class="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="5247" data-activitytype="1" data-maptype="trailforks" data-trailstyle="difficulty" data-controls="1" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>) :
                this.props.location : 3
                    (<div class="TrailforksWidgetMap" data-w="500px" data-h="800px" data-rid="5724" data-activitytype="1" data-maptype="trailforks" data-trailstyle="difficulty" data-controls="1" data-list="0" data-dml="1" data-layers="labels,poi,polygon,directory,region" data-z="" data-lat="" data-lon="" data-hideunsanctioned="0"></div>) :
                        null

*/