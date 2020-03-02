import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import ActivityList from './ActivityList'

//Component Imports
import LocationMeetups from './LocationMeetups'
import AddPostForm from './AddPostForm'
import Locations from './Locations'
import Expiry from './Expiry'
import Nav from './Nav'
import Register from './Register'
import Login from './Login'


class App extends React.Component{
 

  render() {
  return (
    <Router>
      <div>
        <Nav />
        <h3 className='logo'>BUDS</h3>
        <Route exact path="/" component={Home} />
        <Route path='/locations' component={Locations} />
        <Route path="/meetups" component={LocationMeetups} />
        <Route path='/addpostform' component={AddPostForm} />
        <Route path='/expiry' component={Expiry} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </div>
    </Router>
  )}
}

export default App
