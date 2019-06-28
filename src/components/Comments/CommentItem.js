import React from 'react';
import { Comment } from 'semantic-ui-react';

const CommentItem = ({ key, text, name }) => (

  <div className="comment-item">
    <Comment key={key}>
      <Comment.Content>
        <Comment.Author as='a'>{name}</Comment.Author>
        <Comment.Text>{text}</Comment.Text>
      </Comment.Content>
    </Comment>
  </div >
);

export default CommentItem;