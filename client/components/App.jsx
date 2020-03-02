import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

//Component Imports
import Home from './Home'
import LocationMeetups from './LocationMeetups'
import AddPostForm from './AddPostForm'
import Locations from './Locations'

class App extends React.Component{
 

  render() {
  return (
    <Router>
      <div>
        <h3 className='logo'>BUDS</h3>
        <Route exact path="/" component={Home} />
        {/* <Route path='/locations' component={Locations} />
        <Route path="/meetups" component={LocationMeetups} /> */}
        <Route path='/addpostform' component={AddPostForm} />
        <Route exact path='/:activity' component={Locations} />
        <Route exact path='/:activity/:location' component={LocationMeetups}/>
      </div>
    </Router>

  )}
}

export default App
