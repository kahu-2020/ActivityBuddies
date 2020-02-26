import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'

import AddPostForm from './AddPostForm'

class App extends React.Component{

  render() {
  return (
    <Router>
      <div>
        <Route path='/addpostform' component={AddPostForm} />
      </div>
    </Router>

  )}
}

export default App
