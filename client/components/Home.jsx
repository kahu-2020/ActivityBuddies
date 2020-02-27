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
           So anyway hows the mother? also the text shadow isnt working with this like it did with the main links so thats a problem we need to fix</p>
      </div>
    )
  }
}

export default App
