import React from 'react';
import { Form, Button } from 'semantic-ui-react'

const CommentForm = () => (
  <div className="comment-form-container">
    <div className="comment-form" >
      <Form reply>
        <Form.TextArea
          // value={this.state.value} 
          // onChange={this.handleChange}
        />
        <Button content='Add Comment' labelPosition='left' icon='edit' primary />
      </Form>
    </div>
  </div >
);


export default CommentForm;