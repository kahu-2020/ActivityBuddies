import request from 'superagent'


export function gotLocations(locations) {
    return {
        type: 'GOT_LOCATIONS',
        locations: locations 
    }

}

export function setCurrentLocation(location){
    console.log(location)
    return {
        type: 'SET_CURRENTLOCATION', 
        currentLocation: location
    }
}

export function getLocations(id) {
    return (dispatch) => {
        request.get('/api/v1/activities/'+id) // fix id is it $id
        .then(res => res.body)
        .then(locations => {
            dispatch(gotLocations(locations))
        })
    }
}

export function postAdded(newPost) {
    console.log(newPost)
    return {
        type: 'ADD_POST',
        newPost: newPost
    }
}

export function addPost(newPost) {
    return (dispatch) => {
        request.post('/api/v1/posts/')
        .send(newPost)
        .then(dispatch(postAdded(newPost)))
    }
}

export function getActivities() {
    return (dispatch) => {
        request.get('/api/v1/activities/') 
        .then(res => res.body)
        .then(activities => {
            dispatch(gotActivities(activities))
        })
    }
}

export function gotActivities(activities) {
    return {
        type: 'GOT_ACTIVITIES',
        activities: activities 
    }

}

export function currentActivity(activity) {
    return {
        type: 'SET_CURRENT_ACTIVITY',
        activity: activity
    }
}

