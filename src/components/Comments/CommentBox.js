import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      comments: ['First Comment', 'Second Comment', 'Third Comment'],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({comment: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(state => {
      const comments = [...state.comments, state.comment];

      return {
        comments,
        comment: '',
      };
    });
  };

  render() {
    return (
      <div className="comment-list-container">
      {
        this.state.comments.map((comment) =>
          <li>{comment}</li>
        )
      }
      
      <form onSubmit = { this.handleSubmit } >
        <label>
          comment:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form >
      </div>
    );
  }
}

export default CommentBox;