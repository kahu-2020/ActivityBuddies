import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'
import ActivityList from './ActivityList'

import AddPostForm from './AddPostForm'
import Locations from './Locations'

class App extends React.Component{
 

  render() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ActivityList} />
        <Route path='/locations' component={Locations} />
        <Route path='/addpostform' component={AddPostForm} />
      </div>
    </Router>

  )}
}

export default App
