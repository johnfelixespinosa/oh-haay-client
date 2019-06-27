import React from 'react';
import { Comment } from 'semantic-ui-react'

const CommentTable = ({ comments }) => (
  <div className="comment-list-container">
    <table className='comment-list' >
      <tbody>
        <ul>
          <Comment.Group>
            {comments.map((comment) =>
              <Comment>
                <Comment.Text>{comment.text}</Comment.Text>
              </Comment>
            )}
          </Comment.Group>
        </ul>
      </tbody>
    </table >
  </div>
);


export default CommentTable;