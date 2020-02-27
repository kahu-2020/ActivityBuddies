import {combineReducers} from 'redux'

import locations from './locations'
import currentLocation from './currentLocation'

export default combineReducers({
    locations,
    currentLocation
})
