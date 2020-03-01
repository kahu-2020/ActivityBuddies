const initialState = {
  id: 1, 
  name: 'Makara', 
  activity_id: 2, 
  widget: "https://www.trailforks.com/widgets/region_map/?rid=5563&w=800px&h=400px&activitytype=1&maptype=terrain&trailstyle=difficulty&controls=0&list=0&layers=labels,poi,polygon,directory,region&hideunsanctioned=0&routeids=null&z=&lat=&lon=",
}

function currentLocation (state = initialState, action) {
  switch(action.type) {
    case 'SET_CURRENTLOCATION':
      return action.currentLocation

    default:
      return state
  }
}

export default currentLocation