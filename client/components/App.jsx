import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'
import ActivityList from './ActivityList'

//Component Imports
import LocationMeetups from './LocationMeetups'
import AddPostForm from './AddPostForm'

class App extends React.Component{

  render() {
  return (
    <Router>
      <div>
        <Route path="/banana" component={LocationMeetups} />
        {/* <Route path="/" component={ActivityList} /> */}
        <Route path='/addpostform' component={AddPostForm} />
      </div>
    </Router>

  )}
}

export default App
