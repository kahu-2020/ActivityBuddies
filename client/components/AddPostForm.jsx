import React from 'react'

class AddPostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      testValue: null
    }
  }

  testClick = (e) => {
    e.preventDefault()
    this.setState({
      testValue: e.target.value
    })
  }

  render() {
    return (
    <div className='addPostForm'>

      <h4>Add your new post here!</h4>

      <br/>
      
      <form>
        <input type='text' name='name' placeholder='type your text here'/>
        <input type="datetime-local" id="meeting-time"
       name="meetup-time"
       min={new Date()} max="2040-06-14T00:00" onChange={this.testClick}></input>
        <input type='submit' value='submit'/>
      </form>

    </div>
  )
  }
  
  
}
  


export default AddPostForm