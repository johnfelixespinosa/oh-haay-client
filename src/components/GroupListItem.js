import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react'
import './GroupListItem.css';

const GroupListItem = ({ name, meetup_group_id, group_link, group_key_photo_url, city, country }) => {

  return (
    <Card centered>
      <Image src={group_key_photo_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>{city}, {country}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        
          <Icon name='barcode' />
          {meetup_group_id}
        
      </Card.Content>
    </Card>
  );
}
export default GroupListItem;