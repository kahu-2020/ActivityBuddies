import React from 'react'

import ActivityList from './ActivityList'


class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
 
  }


  
  render() {
    return (
      <div>
          <h1>Activity Buddies</h1>
          <ActivityList/>
      </div>
    )
  }
}

export default App
