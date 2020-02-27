import {combineReducers} from 'redux'

import locations from './locations'
import currentLocation from './currentLocation'
import newPost from './newPost'

export default combineReducers({
    locations,
    currentLocation,
    newPost
})
