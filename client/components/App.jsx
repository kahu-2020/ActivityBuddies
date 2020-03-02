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
        <Route path="/" component={Nav} />
<<<<<<< HEAD
        <h3 className='logo'>MOVE</h3>
=======
        <h3 className='logo'>BUDS</h3>
>>>>>>> fc44f413a855dfceafbbd0be2cf879274faefc2f
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route path='/addpostform' component={AddPostForm} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
<<<<<<< HEAD
          <Route path='/expiry' component={Expiry} />
=======
>>>>>>> fc44f413a855dfceafbbd0be2cf879274faefc2f
          <Route exact path='/:activity' component={Locations} />
          <Route exact path='/:activity/:location' component={LocationMeetups}/>
        </Switch> 
      </div>
    </Router>
  )}
}

export default App
