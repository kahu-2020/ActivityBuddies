import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'
import ActivityList from './ActivityList'


class App extends React.Component{

  render() {
  return (
    <Router>
      <div>
        <Route path="/" component={ActivityList} />
      </div>
    </Router>

  )}
}

export default App
