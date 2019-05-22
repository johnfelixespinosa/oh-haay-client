import React, { Component } from 'react';
import GroupListItem from '../components/GroupListItem';
import { Grid, Image } from 'semantic-ui-react'
import './GroupsList.css';

class GroupsList extends Component {
  render() {
    const groups = this.props.groups
    const groupsCount = groups && groups.length
    const renderGroups = groups && groups.map(group =>
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
        <div className="group-list-title">
          <h3>Member of {groupsCount} Groups</h3>
        </div>
        <Grid columns={4} divided>
          {renderGroups}
        </Grid>
      </div>
    )
  }
}

export default GroupsList;