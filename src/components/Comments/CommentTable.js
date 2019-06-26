import React from 'react';
// import { Comment } from 'semantic-ui-react'

const CommentTable = ({ comments }) => (
  <div className="comment-list-container">
    <table className='comment-list' >
      <tbody>
        <ul>
          {comments.map((comment) =>
            <li>
              {comment.text}
            </li>
          )}
        </ul>
      </tbody>
    </table >
  </div>
);


export default CommentTable;