import {combineReducers} from 'redux'

import locations from './locations'
import currentLocation from './currentLocation'
import newPost from './newPost'
import activities from './activities'


export default combineReducers({
    locations,
    currentLocation,
    newPost,
    activities
})
