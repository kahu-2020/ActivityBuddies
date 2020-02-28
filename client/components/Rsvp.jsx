import React from 'react'

class Rsvp extends React.Component {
    constructor(props) {
      super(props);

      this.buttonClicked = this.buttonClicked.bind(this);
    }
    
    buttonClicked() {
      this.props.dispatch(addRsvp(this.props.posts.id))
      
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

  mapStateToProps() {
    return {
      
    }

  }
export default Rsvp