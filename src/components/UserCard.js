import React, { Component } from 'react';

const UserCard = ({ name, meetup_id, meetup_profile_url, photo_url, city}) => {

  return (
    <div className="card 1">
      <div className="card_image">
        <img
          src={photo_url}
          alt=''
        />
      </div>
      <div className="card_title title-white">
        <p>{name}</p>
      </div>
    </div>
  );
}


export default UserCard;