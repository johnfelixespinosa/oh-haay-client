import React, { Component } from 'react';
import Card from '../components/Card';
import './GroupsList.css';

class GroupsList extends Component {
  render() {
    const groups = this.props.groups
    const groupsCount = groups && groups.length
    const renderGroupCards = groups && groups.map(group =>
      <Card
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
        <div className="group-list-title">
          <h3>Member of {groupsCount} Groups</h3>
        </div>
        <div className="app-card-list" id="app-card-list">
          {renderGroupCards}
        </div>
      </div>
    )
  }
}

export default GroupsList;