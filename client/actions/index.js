import request from 'superagent'
import { gotPostsByLocationID } from './postListActions'

export function setCurrentActivity(activity){
    return {
        type: 'SET_CURRENT_ACTIVITY', 
        currentActivity: activity
    }
}

export function setCurrentLocation(location){
    
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