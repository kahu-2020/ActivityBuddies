import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

import AddPostForm from './AddPostForm'

class App extends React.Component{

  render() {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path='/addpostform' component={AddPostForm} />
      </div>
    </Router>

  )}
}

export default App
