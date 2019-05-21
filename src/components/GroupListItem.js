import React from 'react';

const GroupListItem = ({ name, meetup_group_id, group_link, group_key_photo_url, city, country }) => {

  return (
    <div className="CropCard col-12 col-sm-6 col-md-4 col-lg-3">
      {group_key_photo_url ? (
        <div className="square" style={{ backgroundImage: `url(${group_key_photo_url})` }} />
      ) : (
          <div
            className="square"
            style={{
              backgroundImage:
                'url(https://x.kinja-static.com/assets/images/logos/placeholders/default.png)',
            }}
          />
        )}
      <h3>
        <a href={group_link} >{name}</a>
      </h3>
      <p>
        Located At
      {city}, {country}
      </p>
    </div>
  );
}

export default GroupListItem;