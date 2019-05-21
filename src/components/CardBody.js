import React from 'react';
import CardButton from './CardButton';

const CardBody = ({ name, city, country }) => {

  return (
    <div className="card-body">

      <h2>{name}</h2>

      <p className="body-content">{city}, {country}</p>

      <CardButton />
    </div>
  )
}


export default CardBody;