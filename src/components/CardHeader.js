import React from 'react';

const CardHeader = ({ city, group_key_photo_url }) => {

  var style = {
    backgroundImage: `url(${group_key_photo_url})`,
  };
  return (
    <header style={style} className="card-header">
      <h4 className="card-header--title">{city}</h4>
    </header>
  )
}

export default CardHeader;