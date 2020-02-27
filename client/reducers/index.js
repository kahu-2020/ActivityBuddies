import {combineReducers} from 'redux'

import locations from './locations'
import currentLocation from './currentLocation'
import activities from './activities'


export default combineReducers({
    locations,
    currentLocation,
    activities
})
