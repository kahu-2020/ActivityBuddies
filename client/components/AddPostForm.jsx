import React from 'react'

class AddPostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      testValue: null,
      id: '',
      user_name: '',
      notes: '',
      dateTime: '',
      tracks: '',
      skill: '',
      location_id: ''
    }
    this.handleChange = this.handleChange.bind(this),
    this.handleSubmit = this.handleSubmit.bind(this),
    this.testClick = this.testClick.bind(this)
  }

  
  testClick = (e) => {
    e.preventDefault()
    this.setState({
      testValue: e.target.value
    })
  }


  //the state change when user typing
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  

  //once user hit submit, then new post added to post db
  handleSubmit = (e) => {
    console.log('submit')
    e.preventDefault()

    const post = this.state
    post.id = this.props.id

    this.setState({
      id: '',
      user_name: '',
      notes: '',
      dateTime: '',
      tracks: '',
      skill: '',
      location_id: ''
    })
  }

  render() {
    return (
    <div className='addPostForm'>

      <button>Go back</button>

      {/* Add new post form (line 64 - 119) */}
      <h4>Add your new post here!</h4>
      <br/>
      
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>Username: </label>
        <input
          type='text'
          name='user_name'
          placeholder='username'
          value={this.setState.user_name}
          onChange={this.handleChange}
        />
        <br />

        <label htmlFor='name'>Notes: </label>
        <textarea
          type='text'
          name='notes'
          placeholder='your meetup details'
          value={this.setState.notes}
          onChange={this.handleChange}
        />
        <br />

        <label htmlFor='name'>Tracks: </label>
        <input
          type='text'
          name='tracks'
          placeholder='tracks you are doing' //drop down menu?
          value={this.setState.lost_pet_photo}
          onChange={this.handleChange}
        />
        <br />

        <label htmlFor='name'>Skill: </label>
        <input
          type='text'
          name='skill'
          placeholder='your skill level' //dropdown menu?
          value={this.setState.lost_pet_photo}
          onChange={this.handleChange}
        />
        <br />

        <label htmlFor='name'>Date and time: </label>
        <input type="datetime-local" id="meeting-time"
         name="meetup-time"
         min={new Date()} max="2040-06-14T00:00" onChange={this.testClick}>
        </input>
        
        <br /><br />

        <input type='submit' value='submit'/>

      </form>

    </div>
  )
  }
  
  
}
  
export default AddPostForm