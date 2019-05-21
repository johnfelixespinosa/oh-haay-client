import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import './Card.css';

const Card = ({ name, meetup_group_id, group_link, group_key_photo_url, city, country }) => {


  return (
    <article className="card">
      <CardHeader city={city} group_key_photo_url={group_key_photo_url} />
      <CardBody name={name} city={city} country={country} />
    </article>
  )
}


export default Card;