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
          <p className="about-blurb">This is a shitty placeholder text that tells you sweet fuck all about this website but looks pretty while doing nothing. And it has to take up a decent portion of the page which is why im typing this sentence.
</p>
      </div>
    )
  }
}

export default App
