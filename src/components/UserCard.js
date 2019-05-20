import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    return (
      <div className="card 1">
        <div className="card_image">
          <img
            src={this.props.user.photo_url}
            alt=''
          />
        </div>
        <div className="card_title title-white">
          <p>{this.props.user.name}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;