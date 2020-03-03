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
          <ActivityList/>
          <div className="about-blurb">
          <p >Register with us and make new connections. Join an organised meet up or make your own and explore some of Wellington’s best outdoor activities. </p>
          <p>Get out, meet up, move!</p>
          </div>

      </div>
    )
  }
}

export default App
