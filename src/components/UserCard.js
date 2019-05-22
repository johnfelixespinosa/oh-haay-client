import React from 'react';
import { Grid, Card, Image, Icon } from 'semantic-ui-react'
import './UserCard.css';

const UserCard = ({ name, meetup_id, meetup_profile_url, photo_url, city}) => {

  return (
    <Card className="user-card" centered image={photo_url} header={name} meta={city}/>
  );
}

export default UserCard;