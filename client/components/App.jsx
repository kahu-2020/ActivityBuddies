import React from 'react'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

//Component Imports
import Home from './Home'
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
<<<<<<< HEAD
        <Nav />
        <h3 className='logo'>MOVE</h3>
        <Route exact path="/" component={Home} />
        <Route path='/locations' component={Locations} />
        <Route path="/meetups" component={LocationMeetups} />
        <Route path='/addpostform' component={AddPostForm} />
        <Route path='/expiry' component={Expiry} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
=======
        <Route path="/" component={Nav} />
        <h3 className='logo'>BUDS</h3>
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route path='/addpostform' component={AddPostForm} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/:activity' component={Locations} />
          <Route exact path='/:activity/:location' component={LocationMeetups}/>
        </Switch> 
>>>>>>> 31559f0d263965bf5b60b2f99d5e38bad989c0a0
      </div>
    </Router>
  )}
}

export default App
