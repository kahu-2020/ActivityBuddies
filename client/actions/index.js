import request from 'superagent'
import { gotPostsByLocationID } from './postListActions'


export function getCurrentActivity(name) {
    // going to back end to get whole currentActivity by name
    return (dispatch) => {
        request.get('/api/v1/activities/activity/'+name)
        .then(res => res.body)
        .then(activity => {
            dispatch(setCurrentActivity(activity))
            dispatch(getLocations(activity.id))
        })
    }
}

export function setCurrentActivity(activity){
    return {
        type: 'SET_CURRENT_ACTIVITY', 
        currentActivity: activity
    }
}

<<<<<<< HEAD
=======
export function getCurrentLocation(id) {
    // going to back end to get whole currentLocation by id
    return (dispatch) => {
        request.get('/api/v1/activities/location/'+id)
        .then(res => res.body)
        .then(location => {
            console.log(location)
            dispatch(setCurrentLocation(location))
            dispatch(gotPostsByLocationID(location.id))
        })
    }
}

>>>>>>> 31559f0d263965bf5b60b2f99d5e38bad989c0a0
export function setCurrentLocation(location){
    
    return {
        type: 'SET_CURRENTLOCATION', 
        currentLocation: location
    }
}

export function getLocations(id) {
    return (dispatch) => {
        request.get('/api/v1/activities/'+id) 
        .then(res => res.body)
        .then(locations => {
            dispatch(gotLocations(locations))
        })
    }
}
export function gotLocations(locations) {
    return {
        type: 'GOT_LOCATIONS',
        locations: locations 
    }
}

export function postAdded(newPost) {
    return {
        type: 'ADD_POST',
        newPost: newPost
    }
}

export function addPost(newPost) {
    return (dispatch, getState) => {
        request.post('/api/v1/posts/')
        .send(newPost)
        .then(() => {
            dispatch(postAdded(newPost))
        })
        .then(() => {
            console.log('hi', getState()) 
            dispatch(gotPostsByLocationID(getState().currentLocation.id))
        })
        .catch(err => {
            console.log(err)
        })
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

export function getUpComingPosts() {
    return (dispatch) => {
        request.get('/api/v1/posts/upcoming/') 
        .then(res => res.body)
        .then(upcomingposts => {
            dispatch(gotUpcoming(upcomingposts))
        })
    }
}

export function gotUpcoming(upcomingposts) {
    return {
        type: 'GOT_UPCOMING',
        upcomingposts: upcomingposts 
    }

}