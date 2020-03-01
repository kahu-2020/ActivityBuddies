import {combineReducers} from 'redux'
import postList from './postListReducer'

import locations from './locations'
import currentLocation from './currentLocation'
import newPost from './newPost'
import activities from './activities'
import currentActivity from './currentActivity'


export default combineReducers({
    locations,
    currentLocation,
    activities,
    postList,
    newPost,
    activities, 
    currentActivity,

})
