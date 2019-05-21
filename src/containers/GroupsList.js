import React, { Component } from 'react';
import GroupListItem from '../components/GroupListItem';

class GroupsList extends Component {
  render() {
    const renderGroups = this.props.groups && this.props.groups.map(group =>
      <GroupListItem
        key={group.name}
        name={group.name}
        meetup_group_id={group.meetup_group_id} 
        group_link={group.link}
        group_key_photo_url={group.group_key_photo_url}
        city={group.city}
        country={group.country}
      />
    )

    return (
      <div className="group-list">
        {renderGroups}
      </div>
    )
  }
}

export default GroupsList;