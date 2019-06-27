import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentBox = () => (
  <div className="comment-box">
    <CommentList comments={mockComments} />
    <CommentForm />
  </div >
);

const mockComments = [
  {
    id: 1,
    text: "First Comment"
  },
  {
    id: 2,
    text: "Second Comment"
  },
  {
    id: 3,
    text: "Third Comment"
  },
];


export default CommentBox;