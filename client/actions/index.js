import request from 'superagent'


export function gotLocations(locations) {
    return {
        type: 'GOT_LOCATIONS',
        locations: locations 
    }

}

export function setCurrentLocation(location){
    return {
        type: 'SET_CURRENTLOCATION', 
        currentLocation: location
    }
}