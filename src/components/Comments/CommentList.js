import React from 'react';
import { Comment, Header } from 'semantic-ui-react'

const CommentList = ({ comments }) => (
  <div className="comment-list-container">
    <div className="comment-list" >
      <div className="comment-list-header">
        <Header as='h3' dividing>
          Comments
        </Header>
      </div>
      <Comment.Group>
        {comments.map((comment) =>
          <Comment>
            <Comment.Text>{comment.text}</Comment.Text>
          </Comment>
        )}
      </Comment.Group>
    </div>
  </div >
);


export default CommentList;