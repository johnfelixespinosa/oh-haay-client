import React from 'react';
import { Comment, Header } from 'semantic-ui-react';
import CommentItem from './CommentItem';

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
          <CommentItem
            key={comment.id}
            text={comment.text}
            name={comment.name}
          />
        )}
      </Comment.Group>
    </div>
  </div >
);


export default CommentList;