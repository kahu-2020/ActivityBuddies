import React from 'react'
import { addPostApi } from '../api'
import { connect } from 'react-redux'

class AddPostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user_name: '',
      notes: '',
      dateTime: '',
      tracks: '',
      skill: '',
      location_id: ''
    }
    this.handleChange = this.handleChange.bind(this),
      this.handleSubmit = this.handleSubmit.bind(this)
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
    this.props.goBack()
    return addPostApi(post)
  }

  render() {
    return (
      <div className='addPostFormWrapper'>

        <h4>Add your new post here!</h4>
        <form className='addPostForm' onSubmit={this.handleSubmit}>
          <button className='pst-frm-bck-btn' onClick={this.props.goBack}>Go back</button>

          {/* Add new post form */}

          <label className="frm-usr-lbl" htmlFor='name'>Username: </label>
          <input
            className='frm-usr-ipt'
            type='text'
            name='user_name'
            placeholder='username'
            value={this.setState.user_name}
            onChange={this.handleChange}
          />


          <label className="frm-usr-lbl" htmlFor='name'>Notes: </label>
          <textarea
            className='frm-usr-ipt'
            type='text'
            name='notes'
            placeholder='your meetup details'
            value={this.setState.notes}
            onChange={this.handleChange}
          />


          <label className="frm-usr-lbl" htmlFor='name'>Location: </label>
          <select
            className='frm-usr-ipt'
            name='location_id' value={this.setState.location_id}
            onChange={this.handleChange}>
            <option value=''>--Please select the location--</option>
            <option value='1'>Makara</option>
            <option value='2'>Polhill</option>
            <option value='3'>Mt. Vic</option>
          </select>


          <label className="frm-usr-lbl" htmlFor='name'>Tracks: </label>
          <input
            className='frm-usr-ipt'
            type='text'
            name='tracks'
            placeholder='tracks you are doing'
            value={this.setState.tracks}
            onChange={this.handleChange}
          />




          <label className="frm-usr-lbl" htmlFor='name'>Skill: </label>
          <select
            className='frm-usr-ipt'
            name='skill' value={this.setState.skill}
            onChange={this.handleChange}>
            <option value=''>--Please select your skill level--</option>
            <option value='Beginner'>Beginner</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Advanced'>Advanced</option>
            <option value='Expert'>Expert</option>
          </select>


          <label className="frm-usr-lbl" htmlFor='name'>Date and time: </label>
          <input
            className='frm-usr-ipt'
            type="datetime-local" id="meeting-time"
            name="dateTime"
            min={new Date()} max="2040-06-14T00:00" onChange={this.handleChange}>
          </input>



          <input className='frm-usr-ipt' type='submit' value='submit' />

        </form>

      </div>
    )
  }


}

function mapStateToProps(state) {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps)(AddPostForm)