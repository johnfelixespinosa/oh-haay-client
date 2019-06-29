import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {

  state = {
    comments: [
      {
        id: 1,
        name: "Brad",
        text: "First Comment"
      },
      {
        id: 2,
        name: "Will",
        text: "Second Comment"
      },
      {
        id: 3,
        name: "Cathy",
        text: "Third Comment"
      },
    ],
  }

  addComment = () => {
    this.setState({
      comments: [
        ...this.state.comments,
        this.makeComment()]
    });
  }





  render() {

    return (
      <div className="comment-box">
        <CommentList comments={this.state.comments} />
        <CommentForm onSubmit={this.addComment} />
      </div >
    );
  }
}


export default CommentBox;