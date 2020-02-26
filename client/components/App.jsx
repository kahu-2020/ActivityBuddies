import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'

//Component Imports
import LocationMeetups from './LocationMeetups'

class App extends React.Component{

  render() {
  return (
    <Router>
      <div>
        <Route path="/banana" component={LocationMeetups} />
      </div>
    </Router>

  )}
}

export default App
