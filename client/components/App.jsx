import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import ActivityList from './ActivityList'
import AddPostForm from './AddPostForm'
import Locations from './Locations'

class App extends React.Component{
 

  render() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path='/locations' component={Locations} />
        <Route path='/addpostform' component={AddPostForm} />
      </div>
    </Router>

  )}
}

export default App
