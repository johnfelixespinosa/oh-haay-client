import React from 'react';
import './GroupListItem.css';

const GroupListItem = ({ name, meetup_group_id, group_link, group_key_photo_url, city, country }) => {

  return (
    <div className="group-card 1">
      <div className="group-card_image">
        <img src={group_key_photo_url} alt='' />
      </div>
      <div className="group-card_title group-title-white">
        <p>{name}</p>
      </div>
    </div>
  );
}
export default GroupListItem;