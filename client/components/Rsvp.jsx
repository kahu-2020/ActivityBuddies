import React from 'react'

class Rsvp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
      this.buttonClicked = this.buttonClicked.bind(this);
    }
    
    buttonClicked(event) {
      this.setState({value: this.state.value+1});
    }
    
    render() {
      return (
          <div>
          <div>Attendees: {this.state.value}</div>
          <button onClick={this.buttonClicked}>I'm keen!</button>
        </div>
      );
    }
  }

export default Rsvp