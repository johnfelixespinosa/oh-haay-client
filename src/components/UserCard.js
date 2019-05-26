import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
import './UserCard.css';

class UserCard extends Component {

  render() {
    
    return (
      <Card
        className="user-card"
        centered image={this.props.photo_url}
        header={this.props.name}
        meta={this.props.city}
      />
    );
  }
}
export default UserCard;