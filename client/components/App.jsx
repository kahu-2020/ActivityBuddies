import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

//Component Imports
import Home from './Home'
import LocationMeetups from './LocationMeetups'
import AddPostForm from './AddPostForm'
import Locations from './Locations'
import Nav from './Nav'
import Register from './Register'
import Login from './Login'


class App extends React.Component{
 

  render() {
  return (
    <Router>
      <div>
        <Nav />
        <h3 className='logo'>MOVE</h3>
        <Route exact path="/" component={Home} />
        <Route path='/addpostform' component={AddPostForm} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route exact path='/:activity' component={Locations} />
        <Route exact path='/:activity/:location' component={LocationMeetups}/>
       
      </div>
    </Router>
  )}
}

export default App
