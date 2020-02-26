import React from 'react'

class AddPostForm extends React.Component {

  render() {
    return (
    <div className='addPostForm'>

      <h4>Add your new post here!</h4>

      <br/>
      
      <form>
        <input type='text' name='name' placeholder='type your text here'/>
        <input type='submit' value='submit'/>
      </form>

    </div>
  )
  }
  
  
}
  


export default AddPostForm