import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'
import ActivityList from './ActivityList'

import AddPostForm from './AddPostForm'

class App extends React.Component{

  render() {
  return (
    <Router>
      <div>
        <Route path="/" component={ActivityList} />
        <Route path='/addpostform' component={AddPostForm} />
      </div>
    </Router>

  )}
}

export default App
