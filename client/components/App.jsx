import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import ActivityList from './ActivityList'

//Component Imports
import LocationMeetups from './LocationMeetups'
import AddPostForm from './AddPostForm'
import Locations from './Locations'
import Expiry from './Expiry'

class App extends React.Component{
 

  render() {
  return (
    <Router>
      <div>
        <h3 className='logo'>BUDS</h3>
        <Route exact path="/" component={Home} />
        <Route path="/banana" component={LocationMeetups} />
        <Route path='/locations' component={Locations} />
        <Route path='/addpostform' component={AddPostForm} />
        <Route path='/expiry' component={Expiry} />
      </div>
    </Router>

  )}
}

export default App
