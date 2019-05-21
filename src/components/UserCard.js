import React from 'react';
import './UserCard.css';

const UserCard = ({ name, meetup_id, meetup_profile_url, photo_url, city}) => {

  return (
    <div className="user-card 1">
      <div className="user-card_image">
        <img
          src={photo_url}
          alt=''
        />
      </div>
      <div className="user-card_title user-title-white">
        <p>{name}</p>
      </div>
    </div>
  );
}


export default UserCard;