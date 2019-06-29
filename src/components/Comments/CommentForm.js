import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class CommentForm extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  handleCommentChange = event => {
    this.setState({
      text: event.target.value
    })
    console.log("comment:", this.state)
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log("ready to submit", this.state)
  }

  render() {
    return (

      <div className="comment-form-container">
        <div className="comment-form" >
          <Form reply
            onSubmit={this.handleSubmit}
          >
            <Form.TextArea
              onChange={this.handleCommentChange}
              value={this.state.value}
            />
            <Button content='Add Comment' labelPosition='left' icon='edit' primary />
          </Form>
        </div>
      </div >
    );
  }
}

export default CommentForm;